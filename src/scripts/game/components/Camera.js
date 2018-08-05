import Connect from '../../store/reducers/Connect';
import { position } from '../../store/actions/requests';
import { LAYER } from '../constants'
import { screenToImageButtonId, getItemById } from './utils';
import { drawById, drawByName } from '../utils/draw';

const {BOTTOM, MIDDLE} = LAYER;

export default class Camera {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');
    this.icons = loader.getImage('icons');

    this.connect = new Connect(this.store);
  }

  findTile(tiles, x, y) {
    return tiles.find(tile => {
      return x === tile.x && y === tile.y;
    });
  }

  getOffsetOrigin(size, x, y) {
    // move camera
    return {
      x: Math.round(x * size - Math.floor(this.canvas.width / 2) + size / 2),
      y: Math.round(y * size - Math.floor(this.canvas.height / 2) + size / 2)
    };
    // clamp values
    // this.x = Math.max(0, Math.min(this.x, this.maxX));
    // this.y = Math.max(0, Math.min(this.y, this.maxY));
  }

  updateClick(x, y) {
    const clickId = x && y && screenToImageButtonId(x, y, this.clickTiles);
    if (clickId) {
      const { pos } = this.connect.map;
      const tile = getItemById(this.clickTiles, clickId);
      if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
        this.store.dispatch(position(clickId));
      }
    }
  }

  update(delta, x, y) {
    this.updateClick(x, y);
  }

  render() {
    const { pos, tiles, sight, zoom } = this.connect.map;
    const tileSize = this.atlas.tileset.tilewidth * zoom;
    const iconSize = this.icons.tileset.tilewidth * zoom;
    const gridZoom = (tileSize - 1) / (tileSize / zoom)

    const origin = this.getOffsetOrigin(tileSize, pos.x, pos.y);
    const startCol = Math.floor(origin.x / tileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / tileSize) + 1);
    const startRow = Math.floor(origin.y / tileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / tileSize) + 1);
    const offsetX = -origin.x + startCol * tileSize;
    const offsetY = -origin.y + startRow * tileSize;
    let clickTiles = [];
    let dim = false;
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = (col - startCol) * tileSize + offsetX;
        const y = (row - startRow) * tileSize + offsetY;
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

          if (!dim && 'visitors' in tile && tile.visitors === true) {
            const iconOffset = (tileSize - iconSize) / 2
            drawByName(this.ctx, this.icons, 'user', gridZoom, x + iconOffset, y + iconOffset);
          }

          if (dim) {
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            this.ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
      }
    }
    this.clickTiles = clickTiles;
  }
}
