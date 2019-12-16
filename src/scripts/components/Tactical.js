import { send } from '@giantmachines/redux-websocket';
import Camera from './Camera';
import Connect from '../Connect';
import GroundLayer from './EntityLayers/GroundLayer';
import FireLayer from './EntityLayers/FireLayer';
import LootLayer from './EntityLayers/LootLayer';
import PlayerLayer from './EntityLayers/PlayerLayer';
import TreeLayer from './EntityLayers/TreeLayer';
import HighlightLayers from './EntityLayers/HighlightLayers';
import {
  clickedLeft,
  clickedRight,
  needRender,
  completedRender,
  selectTile,
  selectAction,
  eventRequest,
} from '../actions/actions';
import { EVENTS } from '../actions/types';
import { screenToTile } from './utils';
import { FOREST_BLACK } from '../utils/colors';


export default class Tactical {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.connect = new Connect(this.store);
    const { zoom } = this.connect;

    this.tacticalImg = this.loader.getImage('tactical', zoom);

    this.camera = new Camera(
      this.canvas.width, // width
      this.canvas.height, // height
      0, // xStart
      0, // yStart
      this.tacticalImg.tileset.tilewidth / zoom, // grid size
      zoom,
    );

    this.fontSize = 16;

    this.createOffscreenCanvas();
    this.groundLayer = new GroundLayer(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
    this.lootLayer = new LootLayer(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
    this.fireLayer = new FireLayer(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
    this.playerLayer = new PlayerLayer(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
    this.treeLayer = new TreeLayer(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
    this.highlightLayers = new HighlightLayers(this.store, this.offScreenCanvas, this.offScreenContext, this.loader, this.camera);
  }

  createOffscreenCanvas() {
    this.offScreenCanvas = document.createElement('canvas');
    this.offScreenCanvas.width = this.canvas.width;
    this.offScreenCanvas.height = this.canvas.height;
    this.offScreenContext = this.offScreenCanvas.getContext('2d');
    this.offScreenContext.imageSmoothingEnabled = false;
  }

  copyToOnScreen() {
    this.ctx.drawImage(this.offScreenCanvas, 0, 0);
  }

  update(step) {
    this.fireLayer.update(step);

    const {
      keys,
      clickLeft: { x: lx, y: ly },
      clickRight: { x: rx, y: ry },
      mousePos: { x: mx, y: my },
      currentPlayer,
      selectedAction,
    } = this.connect;

    // handle camera movement with arrow keys and mouse position over edges
    let dirx = 0;
    let diry = 0;
    if (keys.includes('ArrowLeft')) { dirx = -1; }
    if (keys.includes('ArrowRight')) { dirx = 1; }
    if (keys.includes('ArrowUp')) { diry = -1; }
    if (keys.includes('ArrowDown')) { diry = 1; }
    if (!(dirx === 0 && diry === 0)) {
      this.camera.move(step, dirx, diry);
      this.store.dispatch(needRender());
    }

    const leftClickedTile = (
      lx && ly && screenToTile(lx, ly, this.groundLayer.visibleEntities)
    );
    if (leftClickedTile) {
      this.store.dispatch(clickedLeft());
      const { xPos, yPos, xCoord, yCoord } = leftClickedTile;
      if (selectedAction === 'attack') {
        if ((
          Math.abs(currentPlayer.xPos - xPos)
          + Math.abs(currentPlayer.yPos - yPos)
          + Math.abs(currentPlayer.xCoord - xCoord)
          + Math.abs(currentPlayer.yCoord - yCoord)
        ) === 1) {
          const { id } = currentPlayer;
          this.store.dispatch(send(eventRequest(EVENTS.ATTACK, {
            id, xPos, yPos, xCoord, yCoord,
          })));
        }
        this.store.dispatch(selectTile());
      } else {
        this.store.dispatch(selectTile({
          xPos, yPos, xCoord, yCoord,
        }));
      }
    }

    const rightClickedTile = (
      rx && ry && screenToTile(rx, ry, this.groundLayer.visibleEntities)
    );
    if (rightClickedTile) {
      this.store.dispatch(clickedRight());
      const { xPos, yPos, xCoord, yCoord } = rightClickedTile;
      const { id } = currentPlayer;
      const pace = 1;
      this.store.dispatch(send(eventRequest(EVENTS.MOVE, {
        id, xPos, yPos, xCoord, yCoord, pace,
      })));
      this.store.dispatch(selectTile());
    }
    
    if (leftClickedTile || rightClickedTile && selectedAction === 'attack') {
      this.store.dispatch(selectAction('main'));
    }

    const hoveredTile = (
      mx && my && screenToTile(mx, my, this.groundLayer.visibleEntities)
    );
    if (!this.hoveredTile) this.hoveredTile = hoveredTile;

    if (hoveredTile && (
      hoveredTile.xPos !== this.hoveredTile.xPos
      || hoveredTile.yPos !== this.hoveredTile.yPos
      || hoveredTile.xCoord !== this.hoveredTile.xCoord
      || hoveredTile.yCoord !== this.hoveredTile.yCoord
    )) {
      this.hoveredTile = hoveredTile;
      this.store.dispatch(needRender());
    }
  }

  renderBackground() {
    this.ctx.fillStyle = FOREST_BLACK;
    const { xStart, yStart, width, height } = this.camera;
    this.ctx.fillRect(xStart, yStart, width, height);
  }

  render() {
    const {
      currentPlayer, zoom, // needRender,
    } = this.connect;
    if (currentPlayer) {
      const {
        xPos, yPos, xCoord, yCoord,
      } = currentPlayer;
      this.camera.lazyCenter(xPos, yPos, xCoord, yCoord, zoom);
    }

    // if (needRender) {
      this.tacticalImg = this.loader.getImage('tactical', zoom);
      this.camera.updateSize(this.canvas.width, this.canvas.height);

      this.renderBackground();

      this.groundLayer.render()
      this.lootLayer.render();
      this.fireLayer.render();
      this.playerLayer.render()
      this.treeLayer.render();

      const { visibleEntities: tiles } = this.groundLayer;
      const { visibleEntities: players } = this.playerLayer;

      this.highlightLayers.renderFogOfWarEffects(tiles);
      this.highlightLayers.renderTileEffects(tiles);
      this.playerLayer.renderPlayerOverlay()
      this.highlightLayers.renderSelectionEffects(tiles);
      this.highlightLayers.renderHoverEffects(tiles, players);

      this.store.dispatch(completedRender());
    // }
    this.copyToOnScreen();
  }
}
