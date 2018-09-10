import addInputListeners from './utils/addInputListeners';
import Connect from '../store/Connect';
import Loader from './utils/Loader';
import atlasImage from '../../images/atlas.png';
import iconsImage from '../../images/icons.png';
import iconsXlImage from '../../images/icons-xl.png';
import waterImage from '../../images/water.png';
import itemsImage from '../../images/items.png';
import atlasTileset from '../../data/atlas.json';
import iconsTileset from '../../data/icons.json';
import iconsXlTileset from '../../data/icons-xl.json';
import waterTileset from '../../data/water.json';
import itemsTileset from '../../data/items.json';
import MapView from './views/MapView';
import TitleView from './views/TitleView';
import {changeMode} from '../store/actions/actions';
import {MODE} from './constants.js'

export default class RainGame {
	constructor (store, canvas, ctx) {
    this.store = store;
		this.canvas = canvas;
		this.ctx = ctx;
		this._previousElapsed = 0;
		this.connect = new Connect(this.store);

		// Class methods are not automatically bound to instance
		this.tick = this.tick.bind(this);
  }

  init () {
		addInputListeners(this.store.dispatch, this.canvas);
		this.loader = new Loader();
    Promise.all([
			this.loader.setImage('atlas', atlasImage, atlasTileset),
			this.loader.setImage('icons', iconsImage, iconsTileset),
			this.loader.setImage('icons-xl', iconsXlImage, iconsXlTileset),
			this.loader.setImage('water', waterImage, waterTileset),
			this.loader.setImage('items', itemsImage, itemsTileset)
		])
    .then(loaded => {
			this.mapView = new MapView(this.store, this.canvas, this.ctx, this.loader);
			this.titleView = new TitleView(this.store, this.canvas, this.ctx, this.loader);
    }).then(() => {
			window.requestAnimationFrame(this.tick);
		})
  }

	tick (elapsed) {
		window.requestAnimationFrame(this.tick);

		if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.ctx.imageSmoothingEnabled = false;
		}

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		let delta = (elapsed - this._previousElapsed) / 1000.0;
		delta = Math.min(delta, 0.250); // maximum delta of 250 ms
		this._previousElapsed = elapsed;

		if (this.connect.mode !== MODE.TITLE && (this.connect.connected === false || this.connect.loggedIn === false)) {
			this.store.dispatch(changeMode(MODE.TITLE));
			this.mapView = new MapView(this.store, this.canvas, this.ctx, this.loader);
		}

		const keys = this.connect.keys;
		const { xClick, yClick } = this.connect.click;
		switch (this.connect.mode) {
			case MODE.STORY:
			case MODE.INVENTORY:
			case MODE.MAP:
				this.mapView.update(delta, keys, xClick, yClick);
				this.mapView.render();
				break;
			case MODE.TITLE:
				this.titleView.update(delta, keys, xClick, yClick);
				this.titleView.render();
				break;
		}
	}
}
