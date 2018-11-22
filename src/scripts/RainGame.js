import addInputListeners from './utils/addInputListeners';
import Connect from './Connect';
import Loader from './utils/Loader';
import atlasImage from '../images/atlas.png';
import iconsImage from '../images/icons.png';
import iconsXlImage from '../images/icons-xl.png';
import waterImage from '../images/water.png';
import itemsImage from '../images/items.png';
import walkImage from '../images/walk.png';
import atlasTileset from '../data/atlas.json';
import iconsTileset from '../data/icons.json';
import iconsXlTileset from '../data/icons-xl.json';
import waterTileset from '../data/water.json';
import itemsTileset from '../data/items.json';
import walkTileset from '../data/walk.json';
import GameView from './views/GameView';
import TitleView from './views/TitleView';
import { MODE } from './utils/constants';
import { clickedLeft, clickedRight, changeMode } from './actions/actions';

export default class RainGame {
  constructor(store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.previousElapsed = 0;
    this.connect = new Connect(this.store);

    // Class methods are not automatically bound to instance
    this.tick = this.tick.bind(this);
  }

  init() {
    addInputListeners(this.store.dispatch, this.canvas);
    this.loader = new Loader();
    Promise.all([
      this.loader.setImage('atlas', atlasImage, atlasTileset),
      this.loader.setImage('icons', iconsImage, iconsTileset),
      this.loader.setImage('icons-xl', iconsXlImage, iconsXlTileset),
      this.loader.setImage('water', waterImage, waterTileset),
      this.loader.setImage('items', itemsImage, itemsTileset),
      // DEBUG
      this.loader.setImage('walk', walkImage, walkTileset)
    ])
      .then(() => {
        this.gameView = new GameView(this.store, this.canvas, this.ctx, this.loader);
        this.titleView = new TitleView(this.store, this.canvas, this.ctx, this.loader);
      })
      .then(() => {
        window.requestAnimationFrame(this.tick);
      });
  }

  tick(elapsed) {
    window.requestAnimationFrame(this.tick);

    if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.imageSmoothingEnabled = false;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let delta = (elapsed - this.previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.250); // maximum delta of 250 ms
    this.previousElapsed = elapsed;

    if (
      this.connect.mode !== MODE.TITLE
      && (this.connect.connected === false
      || this.connect.loggedIn === false)
    ) {
      this.store.dispatch(changeMode(MODE.TITLE));
      this.gameView = new GameView(this.store, this.canvas, this.ctx, this.loader);
    }

    const { keys, clickLeft, clickRight } = this.connect;
    if (clickLeft.x && clickLeft.y) this.store.dispatch(clickedLeft());
    if (clickRight.x && clickRight.y) this.store.dispatch(clickedRight());
    switch (this.connect.mode) {
      case MODE.TITLE:
        this.titleView.update(keys, clickLeft, clickRight);
        this.titleView.render(delta);
        break;
      default:
        this.gameView.update(keys, clickLeft, clickRight);
        this.gameView.render(delta);
        break;
    }
  }
}
