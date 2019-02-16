import addInputListeners from './utils/addInputListeners';
import Connect from './Connect';
import Loader from './utils/Loader';
import atlasImage from '../images/atlas.png';
import iconsImage from '../images/icons.png';
import iconsXlImage from '../images/icons-xl.png';
import waterImage from '../images/water.png';
import itemsImage from '../images/items.png';
import walkImage from '../images/walk.png';
import newImage from '../images/new.png';
import playerImage from '../images/player.png';
import atlasTileset from '../data/atlas.json';
import iconsTileset from '../data/icons.json';
import iconsXlTileset from '../data/icons-xl.json';
import waterTileset from '../data/water.json';
import itemsTileset from '../data/items.json';
import walkTileset from '../data/walk.json';
import newTileset from '../data/new.json';
import playerTileset from '../data/player.json';
import GameView from './views/GameView';
import TitleView from './views/TitleView';
import { VIEW } from './utils/constants';
import { clickedLeft, clickedRight, setView } from './actions/actions';

export default class RainGame {
  constructor(store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    // Initialize game loop variables (except this.now, see frame())
    this.delta = 0;
    this.last = Date.now();
    this.step = 1 / 60;

    // Class methods are not automatically bound to instance
    this.frame = this.frame.bind(this);
  }

  init() {
    addInputListeners(this.store.dispatch, this.canvas);
    this.loader = new Loader();
    Promise
      .all([
        this.loader.setImage('atlas', atlasImage, atlasTileset),
        this.loader.setImage('icons', iconsImage, iconsTileset),
        this.loader.setImage('icons-xl', iconsXlImage, iconsXlTileset),
        this.loader.setImage('water', waterImage, waterTileset),
        this.loader.setImage('items', itemsImage, itemsTileset),
        this.loader.setImage('walk', walkImage, walkTileset),
        // DEBUG
        this.loader.setImage('new', newImage, newTileset),
        this.loader.setImage('player', playerImage, playerTileset),
      ])
      .then(() => {
        this.gameView = new GameView(this.store, this.canvas, this.ctx, this.loader);
        this.titleView = new TitleView(this.store, this.canvas, this.ctx, this.loader);
      })
      .then(() => {
        window.requestAnimationFrame(this.frame);
      });
  }

  frame() {
    this.now = Date.now();
    this.delta = this.delta + Math.min(1, (this.now - this.last) / 1000);
    while (this.delta > this.step) {
      // Step is constant (tied to framerate)
      // Delta is variable (tied to actual game speed)
      this.delta = this.delta - this.step;
      this.update(this.step);
    }
    this.render(this.delta);
    this.last = this.now;
    window.requestAnimationFrame(this.frame);
  }

  acceptPlayerInput() {
    /*
      Accept input from player(s) (via input devices, eg. pressing up arrow might equate to
      input code "up")

      Queue actions based on player input with mouse and keys.
    */
    console.log(this);
  }

  acceptAiInput() {
    /*
      Accept input from AIs (via either functions or classes that produce same as input codes for
      player, eg. FSM AI wants to go up means it will produce output "up")
    */
    console.log(this);
  }

  makeMovements() {
    /*
      Based on inputs, perform your basic physics or otherwise do movement per entity,
      and add new entities. You must not add or remove entities directly to your entity
      list in this phase, because you are still in the midst of processing the entity list.
      You can add eg. new bullet entities in this phase by adding them to an "additions" list.
    */
    console.log(this);
  }

  checkCollisions() {
    /*
      Run through entities, testing each against every other for a possible collision.
      Any entities that get expired (eg. due to a collision) must still not be removed
      immediately, but rather added to a "removals" list (because otherwise you will
      break the list while it's being processed for physics.
    */
    console.log(this);
  }

  flushEntities() {
    /*
      Finally, add everything in the additions list to the main entity list, and remove
      everything in the removals list from the main entity list. Then flush those two
      auxiliary lists so they are ready to be used for the next update.
    */
    console.log(this);
  }

  update(step) { // TODO Add `step` argument
    // TODO Implement these functions and get rid of the rest of this stuff
    // See https://gamedev.stackexchange.com/questions/40742/javascript-game-loop-and-game-update-design
    // this.acceptPlayerInput();
    // this.acceptAiInput();
    // this.makeMovements();
    // this.checkCollisions();
    // this.flushEntities();

    // Force canvas to be the same size as the window
    if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.imageSmoothingEnabled = false;
    }

    // Force player back to TitleView if connection is lost or if logged out
    if (
      this.connect.view !== VIEW.TITLE
      && (this.connect.connected === false
      || this.connect.loggedIn === false)
    ) {
      this.store.dispatch(setView(VIEW.TITLE));
      this.gameView = new GameView(this.store, this.canvas, this.ctx, this.loader);
    }

    // Run update and render loops for either TitleView or GameView
    switch (this.connect.view) {
      case VIEW.TITLE:
        this.titleView.update(step);
        break;
      default:
        // So far step is only used in TopLayer.js animations
        // TODO: Transition all other animations to use step
        this.gameView.update(step);
        break;
    }

    // COMBAK: Clean up click events that did not collide
    if (this.connect.clickLeft.x && this.connect.clickLeft.y) {
      this.store.dispatch(clickedLeft());
    }
    if (this.connect.clickRight.x && this.connect.clickRight.y) {
      this.store.dispatch(clickedRight());
    }
  }

  render(delta) {
    // Clear canvas for next render
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Render either TitleView or GameView
    switch (this.connect.view) {
      case VIEW.TITLE:
        this.titleView.render();
        break;
      default:
        this.gameView.render(delta);
        break;
    }
  }
}
