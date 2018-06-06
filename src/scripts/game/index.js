import addInputListeners from './utils/addInputListeners';
import Connect from '../store/reducers/Connect';
import Loader from './utils/Loader';
import src from '../../images/atlas.png';
import MapView from './views/MapView';
import MenuView from './views/MenuView';
import StoryView from './views/StoryView';
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
    Promise.resolve(this.loader.setImage('tiles', src))
    .then(loaded => {
      this.atlas = this.loader.getImage('tiles');
			this.mapView = new MapView(this.store, this.canvas, this.ctx, this.atlas);
			this.menuView = new MenuView(this.store, this.canvas, this.ctx);
			this.storyView = new StoryView(this.store, this.canvas, this.ctx);
    });
		window.requestAnimationFrame(this.tick);
  }

	tick (elapsed) {
		window.requestAnimationFrame(this.tick);
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		let delta = (elapsed - this._previousElapsed) / 1000.0;
		delta = Math.min(delta, 0.250); // maximum delta of 250 ms
		this._previousElapsed = elapsed;

		this.mode = this.connect.mode;
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
		}
	}

	render () {
		if (this.mode === MODE.MAP) {
			this.mapView.render();
		} else if	(this.mode === MODE.MENU) {
			this.menuView.render();
		} else if (this.mode === MODE.STORY) {
			this.storyView.render();
		}
	}
}
