import addInputListeners from './utils/addInputListeners';
import Connect from '../store/reducers/Connect';
import Loader from './utils/Loader';
import atlasImage from '../../images/atlas.png';
import iconsImage from '../../images/icons.png';
import iconsXlImage from '../../images/icons-xl.png';
import waterImage from '../../images/water.png';
import atlasTileset from '../../data/atlas.json';
import iconsTileset from '../../data/icons.json';
import iconsXlTileset from '../../data/icons-xl.json';
import waterTileset from '../../data/water.json';
import MapView from './views/MapView';
import MenuView from './views/MenuView';
import StoryView from './views/StoryView';
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
			this.loader.setImage('water', waterImage, waterTileset)
		])
    .then(loaded => {
			this.mapView = new MapView(this.store, this.canvas, this.ctx, this.loader);
			this.menuView = new MenuView(this.store, this.canvas, this.ctx);
			this.storyView = new StoryView(this.store, this.canvas, this.ctx);
			this.titleView = new TitleView(this.store, this.canvas, this.ctx, this.loader);
    }).then(() => {
			window.requestAnimationFrame(this.tick);
		})
  }

	tick (elapsed) {
		window.requestAnimationFrame(this.tick);
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		let delta = (elapsed - this._previousElapsed) / 1000.0;
		delta = Math.min(delta, 0.250); // maximum delta of 250 ms
		this._previousElapsed = elapsed;

		this.mode = this.connect.mode;

		if (this.mode !== MODE.TITLE && (this.connect.connected === false || this.connect.loggedIn === false)) {
			this.store.dispatch(changeMode(MODE.TITLE));
		}

		this.update(delta);
		this.render();
	}

	update (delta) {
		if (this.mode === MODE.MAP) {
			this.mapView.update(delta);
		} else if (this.mode === MODE.MENU) {
			this.menuView.update(delta);
		} else if (this.mode === MODE.STORY) {
			this.storyView.update(delta);
		} else if (this.mode === MODE.TITLE) {
			this.titleView.update(delta);
		}
	}

	render () {
		if (this.mode === MODE.MAP) {
			this.mapView.render();
		} else if	(this.mode === MODE.MENU) {
			this.menuView.render();
		} else if (this.mode === MODE.STORY) {
			this.storyView.render();
		} else if (this.mode === MODE.TITLE) {
			this.titleView.render();
		}
	}
}
