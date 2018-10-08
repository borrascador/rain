import Connect from '../../store/Connect';
import Animation from '../utils/Animation';
import { sendEvent } from '../../store/actions/requests';
import { LAYER } from '../constants'
import { screenToImageButton } from './utils';
import { drawById, drawByName } from '../utils/draw';
import { MEDIUM_OPAQUE } from '../colors';

const {BOTTOM, MIDDLE} = LAYER;

export default class Camera {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');
    this.icons = loader.getImage('icons');
    this.blink = new Animation(1, 1, 0.5);

    this.connect = new Connect(this.store);
  }

  findTile(tiles, x, y) {
    return tiles.find(tile => {
      return x === tile.x && y === tile.y;
    });
  }

  getOffsetOrigin(size, xPos, yPos, xCoords, yCoords) {
    // move camera
    return {
      x: Math.round((xPos + xCoords / 32) * size - Math.floor(this.canvas.width / 2)),
      y: Math.round((yPos + yCoords / 32) * size - Math.floor(this.canvas.height / 2))
    };
    // clamp values
    // this.x = Math.max(0, Math.min(this.x, this.maxX));
    // this.y = Math.max(0, Math.min(this.y, this.maxY));
  }

  updateClick(x, y) {
    const tile = x && y && screenToImageButton(x, y, this.clickTiles);
    if (tile) {
      const { pos, zoom } = this.connect.map;
      if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
        const xCoord = Math.floor((x - tile.xPos) / zoom);
        const yCoord = Math.floor((y - tile.yPos) / zoom);
        this.store.dispatch(sendEvent('move', tile.id, { x: xCoord, y: yCoord }));
      }
    }
  }

  update(x, y) {
    this.updateClick(x, y);
  }

  render(delta) {
    this.blink.tick(delta);
    const { pos, coords, positionTarget, coordsTarget, tiles, sight, zoom } = this.connect.map;
    const tileSize = this.atlas.tileset.tilewidth * zoom;
    const iconSize = this.icons.tileset.tilewidth * zoom;
    const gridZoom = (tileSize - 1) / (tileSize / zoom);

    const origin = this.getOffsetOrigin(tileSize, pos.x, pos.y, coords.x, coords.y);
    const startCol = Math.floor(origin.x / tileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / tileSize) + 1);
    const startRow = Math.floor(origin.y / tileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / tileSize) + 1);

    let clickTiles = [];
    let dim = false;
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = col * tileSize - origin.x;
        const y = row * tileSize - origin.y;
        const tile = this.findTile(tiles, col, row);
        if (tile && Math.abs(pos.x - col) + Math.abs(pos.y - row) === 1) {
          clickTiles.push(Object.assign({}, tile, {
            xPos: x, yPos: y, width: tileSize, height: tileSize
          }));
        }
        if (tile && Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
          dim = false;
        } else {
          dim = true;
        }
        if (tile) {
          [BOTTOM, MIDDLE].forEach(layer => {
            if (layer in tile.layers) {
              const id = tile.layers[layer] - 1;
              drawById(this.ctx, this.atlas, id, gridZoom, x, y);
            }
          });

          if (positionTarget === tile.id) {
            drawById(
              this.ctx,
              this.icons,
              28 + this.blink.getValue(),
              zoom,
              x + coordsTarget.x * zoom - iconSize / 2,
              y + coordsTarget.y * zoom - iconSize / 2
            );
          }

          // if (!dim && 'visitors' in tile && tile.visitors === true) {
          //   // TODO add support for coordinates
          //   const iconOffset = (tileSize - iconSize) / 2
          //   drawById(
          //     this.ctx,
          //     this.icons,
          //     26 + this.blink.getValue(),
          //     gridZoom,
          //     x + iconOffset,
          //     y + iconOffset
          //   );
          // }

          if (dim) {
            this.ctx.fillStyle = MEDIUM_OPAQUE;
            this.ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
      }
    }
    this.clickTiles = clickTiles;

    drawById(
      this.ctx,
      this.icons,
      24 + this.blink.getValue(),
      gridZoom,
      (this.canvas.width - iconSize) / 2,
      (this.canvas.height - iconSize) / 2
    );
  }
}
