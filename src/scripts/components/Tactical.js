import Camera from './Camera';
import Connect from '../Connect';
import { FOREST_BLACK } from '../utils/colors';
import { clickedLeft } from '../actions/actions';
// import { sendEvent } from '../actions/requests';
// import { EVENTS } from '../actions/types';
import {
  screenToImageButton,
  // checkImageCollision,
  coordsToColRow,
  findGroundTile, findTreeTile,
} from './utils';

export default class Tactical {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.tactical = loader.getImage('tactical');
    this.player = loader.getImage('player');
    this.trees = loader.getImage('trees');
    this.party = [];

    this.connect = new Connect(this.store);
    const { zoom } = this.connect;

    this.camera = new Camera(
      this.canvas.width, // width
      this.canvas.height, // height
      0, // xStart
      0, // yStart
      this.tactical.tileset.tilewidth,
      zoom,
    );

    this.createOffscreenCanvas();
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
    // handle camera movement with arrow keys and mouse position over edges
    let dirx = 0;
    let diry = 0;
    const { keys } = this.connect;
    if (keys.includes('ArrowLeft')) { dirx = -1; }
    if (keys.includes('ArrowRight')) { dirx = 1; }
    if (keys.includes('ArrowUp')) { diry = -1; }
    if (keys.includes('ArrowDown')) { diry = 1; }
    if (!(dirx === 0 && diry === 0)) {
      this.camera.move(step, dirx, diry);
    }

    // center camera on player or move player
    const { zoom } = this.connect;
    const { x, y } = this.connect.clickLeft;
    const clickedPlayer = (
      x && y && this.party.length
      && screenToImageButton(x, y, this.party)
    );
    // const tile = (
    //   x && y && this.party.length
    //   && screenToImageButton(x, y, this.clickTiles)
    // );
    if (clickedPlayer) {
      // todo:
      // if player not selected, select player (then if selecte render move radius)
      // if player already selected and clicked in move radius, move player and unselect
      // if player already selected and clicked out of move radius, unselect
      // if player already selected and clicked other player, select other player
      const { pos, coords } = clickedPlayer;
      this.camera.centerToPoint(pos.x, pos.y, coords.x, coords.y, zoom);
      this.store.dispatch(clickedLeft());
    // } else if (tile) {
    //   const xCoord = Math.floor((x - tile.xPos) / zoom);
    //   const yCoord = Math.floor((y - tile.yPos) / zoom);
    //   this.store.dispatch(clickedLeft());
    //   this.store.dispatch(
    //     sendEvent(EVENTS.MOVE, { id: tile.id, x: xCoord, y: yCoord })
    //   );
    }
  }

  renderGroundLayer() {
    const { zoom, tiles } = this.connect.map;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tileWidth = this.tactical.tileset.tilewidth * zoom;
    const tileHeight = this.tactical.tileset.tileheight * zoom;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = col * tileWidth - this.camera.x;
        const y = row * tileHeight - this.camera.y;
        const tile = findGroundTile(tiles, col, row);

        if (tile) {
          // draw ground layer
          const {
            xOffset, yOffset, widthOffset, heightOffset,
          } = this.camera.getOffsets(x, y, tileWidth, tileHeight);
          const { id } = tile;
          const { tileheight, tilewidth, columns } = this.tactical.tileset;
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x - xOffset > -tileWidth && x - xOffset < width)
            && (y - yOffset > -tileHeight && y - yOffset < height)
          ) {
            this.offScreenContext.drawImage(
              this.tactical, // image
              (id % columns) * tilewidth - (xOffset / zoom), // srcX
              Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
              widthOffset / zoom, // srcWidth
              heightOffset / zoom, // srcHeight
              x - xOffset + xStart, // destX
              y - yOffset + yStart, // destY
              widthOffset, // destWidth
              heightOffset // destHeight
            );
          }
        }
      }
    }
  }

  renderTreeLayer() {
    const { tiles, zoom } = this.connect.map;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tileWidth = this.tactical.tileset.tilewidth * zoom;
    const tileHeight = this.tactical.tileset.tileheight * zoom;

    const treeWidth = this.trees.tileset.tilewidth * zoom;
    const treeHeight = this.trees.tileset.tileheight * zoom;

    // todo find better way to handle commented lines
    const startCol = Math.floor(this.camera.x / tileWidth) - 1; // fixes popping in/out on left
    const endCol = startCol + Math.ceil(width / tileWidth) + 2; // fixes popping in/out on right
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight) + 5; // fixes popping in/out on bottom

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = col * tileWidth - this.camera.x - tileWidth;
        const y = row * tileHeight - this.camera.y - treeHeight + tileHeight;
        const tile = findTreeTile(tiles, col, row);

        if (tile) {
          // draw tree layer
          const {
            xOffset, yOffset, widthOffset, heightOffset,
          } = this.camera.getOffsets(x, y, treeWidth, treeHeight);
          const { id } = tile;
          const { tileheight, tilewidth, columns } = this.trees.tileset;
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x - xOffset > -treeWidth && x - xOffset < width)
            && (y - yOffset > -treeWidth && y - yOffset < height)
          ) {
            this.offScreenContext.drawImage(
              this.trees, // image
              (id % columns) * tilewidth - (xOffset / zoom), // srcX
              Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
              widthOffset / zoom, // srcWidth
              heightOffset / zoom, // srcHeight
              x - xOffset + xStart, // destX
              y - yOffset + yStart, // destY
              widthOffset, // destWidth
              heightOffset // destHeight
            );
          }
        }
      }
    }
  }

  // TODO probably need to rewrite this function and clean everything up
  renderPlayerLayer() {
    const { party } = this.connect;
    const { zoom, tiles } = this.connect.map;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tileWidth = this.tactical.tileset.tilewidth * zoom;
    const tileHeight = this.tactical.tileset.tileheight * zoom;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    this.party = [];
    party.forEach((player) => {
      const {
        xPos, yPos, xCoord, yCoord /* icon */
      } = player;
      const superTile = tiles.find(tile => tile.xPos === xPos && tile.yPos === yPos);
      if (superTile) {
        const { col, row } = coordsToColRow(xPos, yPos, xCoord, yCoord);
        if (col >= startCol && col <= endCol && row >= startRow && row <= endRow) {
          const x = col * tileWidth - this.camera.x;
          const y = row * tileHeight - this.camera.y;
          const {
            xOffset, yOffset, widthOffset, heightOffset,
          } = this.camera.getOffsets(x, y, tileWidth, tileHeight);

          const icon = 0;
          const { tileheight, tilewidth, columns } = this.player.tileset;
          const widthRatio = this.player.tileset.tilewidth / this.tactical.tileset.tilewidth;
          const heightRatio = this.player.tileset.tileheight / this.tactical.tileset.tileheight;

          this.offScreenContext.drawImage(
            this.player, // image
            (icon % columns) * tilewidth - (widthRatio * xOffset / zoom), // srcX
            Math.floor(icon / columns) * tileheight - (heightRatio * yOffset / zoom), // srcY
            widthRatio * widthOffset / zoom, // srcWidth
            heightRatio * heightOffset / zoom, // srcHeight
            x - xOffset + xStart, // destX
            y - yOffset + yStart, // destY
            widthOffset, // destWidth
            heightOffset // destHeight
          );

          this.party.push({
            pos: { x: xPos, y: yPos },
            coords: { x: xCoord, y: yCoord },
            xPos: x - xOffset + xStart, // destX
            yPos: y - yOffset + yStart, // destY
            width: widthOffset, // destWidth
            height: heightOffset // destHeight
          });
        }
      }
    });
  }

  render() {
    const { zoom } = this.connect.map;
    const { party } = this.connect;
    if (party.length) {
      const {
        xPos, yPos, xCoord, yCoord,
      } = party[0];
      this.camera.lazyCenter(xPos, yPos, xCoord, yCoord, zoom);
    }
    if (this.camera.needRender) {
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.renderGroundLayer();
      this.renderTreeLayer();
      this.renderPlayerLayer();
      this.camera.needRender = false;
    }
    this.copyToOnScreen();
  }
}
