import Camera from './Camera';
import Connect from '../Connect';
// import { clickedLeft } from '../actions/actions';
// import { sendEvent } from '../actions/requests';
// import { EVENTS } from '../actions/types';
import {
  // screenToImageButton,
  // checkImageCollision,
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

    this.connect = new Connect(this.store);
    // const { pos, coords } = this.connect;

    this.camera = new Camera(
      this.canvas.width, // width
      this.canvas.height, // height
      0, // xStart
      0, // yStart
      this.tactical.tileset.tilewidth,
    );
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
    // const { zoom } = this.connect;
    // const { x, y } = this.connect.clickLeft;
    // const clickedPlayer = (
    //   x && y && this.player
    //   && checkImageCollision(x, y, this.player)
    // );
    // const tile = (
    //   x && y && this.clickTiles
    //   && screenToImageButton(x, y, this.clickTiles)
    // );
    // if (clickedPlayer) {
    //   // todo:
    //   // if player not selected, select player (then if selecte render move radius)
    //   // if player already selected and clicked in move radius, move player and unselect
    //   // if player already selected and clicked out of move radius, unselect
    //   // if player already selected and clicked other player, select other player
    //   const { pos, coords } = this.connect.map;
    //   this.camera.center(pos.x, pos.y, coords.x, coords.y, zoom);
    //   this.store.dispatch(clickedLeft());
    // } else if (tile) {
    //   const xCoord = Math.floor((x - tile.xPos) / zoom);
    //   const yCoord = Math.floor((y - tile.yPos) / zoom);
    //   this.store.dispatch(clickedLeft());
    //   this.store.dispatch(
    //     sendEvent(EVENTS.MOVE, { id: tile.id, x: xCoord, y: yCoord })
    //   );
    // }
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
            this.ctx.drawImage(
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
    const endCol = startCol + Math.ceil(width / tileWidth);
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
            this.ctx.drawImage(
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

  render() {
    const { pos, coords, zoom } = this.connect.map;
    if (!this.camera.x && !this.camera.y) {
      this.camera.center(pos.x, pos.y, coords.x, coords.y, zoom);
    }
    const {
      xStart, yStart, width, height,
    } = this.camera;
    this.ctx.fillStyle = '#113322';
    this.ctx.fillRect(xStart, yStart, width, height);
    this.renderGroundLayer();
    this.renderTreeLayer();
  }
}
