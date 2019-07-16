import Camera from './Camera';
import Connect from '../Connect';
// import { FOREST_BLACK } from '../utils/colors';
import { clickedLeft, clickedRight } from '../actions/actions';
import { sendEvent } from '../actions/requests';
import { EVENTS } from '../actions/types';
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

    // select player if left clicked on player
    // move player to clicked tile if left clicked on visible unoccupied tile
    // unselect player if right clicked anywhere
    const { x: lx, y: ly } = this.connect.clickLeft;
    const clickedPlayer = (
      this.party.length && lx && ly
      && screenToImageButton(lx, ly, this.party)
    );
    const clickedTile = (
      lx && ly && screenToImageButton(lx, ly, this.visibleTiles)
    );

    if (clickedPlayer && (
      !this.selectedPlayer
      || (this.selectedPlayer && this.selectedPlayer.id !== clickedPlayer.id)
    )) {
      this.selectedPlayer = clickedPlayer;
      this.camera.needRender = true;
      this.store.dispatch(clickedLeft());
    } else if (clickedTile && this.selectedPlayer) {
      const { id } = this.selectedPlayer;
      const {
        pos: { x: xPos, y: yPos }, coords: { x: xCoord, y: yCoord },
      } = clickedTile;
      const pace = 1;
      this.store.dispatch(sendEvent(EVENTS.MOVE, {
        id, xPos, yPos, xCoord, yCoord, pace,
      }));
      this.selectedPlayer = null;
      this.camera.needRender = true;
      this.store.dispatch(clickedLeft());
    }

    const { x: rx, y: ry } = this.connect.clickRight;
    if (this.selectedPlayer && rx && ry) {
      this.selectedPlayer = null;
      this.camera.needRender = true;
      this.store.dispatch(clickedRight());
    }

    this.didPlayerMove();
  }

  didPlayerMove() {
    const { party } = this.connect;
    party.forEach(({
      id, xPos, yPos, xCoord, yCoord,
    }) => {
      if (this.party.some(player => (
        player.id === id && (
          player.pos.x !== xPos || player.pos.y !== yPos
          || player.coords.x !== xCoord || player.coords.y !== yCoord
        )
      ))) {
        this.camera.needRender = true;
      }
    });
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

    this.visibleTiles = [];
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
          const {
            id, xPos, yPos, xCoord, yCoord,
          } = tile;
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

          this.visibleTiles.push({
            pos: { x: xPos, y: yPos },
            coords: { x: xCoord, y: yCoord },
            xPos: x - xOffset + xStart, // destX
            yPos: y - yOffset + yStart, // destY
            width: widthOffset, // destWidth
            height: heightOffset // destHeight
          });
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
            id: player.id,
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

  renderSelectionBox() {
    if (this.selectedPlayer) {
      const {
        xPos, yPos, width, height
      } = this.selectedPlayer;
      this.offScreenContext.fillStyle = 'rgba(128, 128, 128, 0.2)';
      this.offScreenContext.fillRect(xPos, yPos, width, height);
      this.offScreenContext.lineWidth = 4;
      this.offScreenContext.strokeStyle = 'rgba(256, 256, 256, 0.8)';
      this.offScreenContext.strokeRect(xPos, yPos, width, height);
    }
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
      this.renderSelectionBox();
      this.camera.needRender = false;
    }
    this.copyToOnScreen();
  }
}
