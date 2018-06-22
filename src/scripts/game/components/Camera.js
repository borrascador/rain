import Connect from '../../store/reducers/Connect';
import { position } from '../../store/actions/requests';
import { CAMERA_SPEED, LAYER } from '../constants'
import { addButtonCoords, screenToButtonId, getItemById } from './utils';
import { drawById, drawByName } from '../utils/draw';

export default class Camera {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');

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
    const clickId = x && y && screenToButtonId(x, y, this.visibleTiles);
    if (clickId) {
      const pos = this.connect.positionCoords;
      const tile = getItemById(this.visibleTiles, clickId);
      if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
        this.store.dispatch(position(clickId));
      }
    }
  }

  update(delta, x, y) {
    this.updateClick(x, y);
  }

  render() {
    const pos = this.connect.positionCoords;
    const {sight} = this.connect.sight;
    const {zoom, mapTiles} = this.connect.map;
    const mapTileSize = this.atlas.tileset.tilewidth * zoom;
    const gridZoom = (mapTileSize - 1) / (mapTileSize / zoom)

    const {BASE, MIDDLE, TOP} = LAYER;

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const origin = this.getOffsetOrigin(mapTileSize, pos.x, pos.y);
    const startCol = Math.floor(origin.x / mapTileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / mapTileSize) + 1);
    const startRow = Math.floor(origin.y / mapTileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / mapTileSize) + 1);
    const offsetX = -origin.x + startCol * mapTileSize;
    const offsetY = -origin.y + startRow * mapTileSize;
    let visibleTiles = [];
    let dim = false;
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = (col - startCol) * mapTileSize + offsetX;
        const y = (row - startRow) * mapTileSize + offsetY;
        const mapTile = this.findTile(mapTiles, col, row);
        if (mapTile && Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
          visibleTiles.push(Object.assign({}, mapTile, {
            xPos: x, yPos: y, width: mapTileSize, height: mapTileSize
          }));
          dim = false;
        } else {
          dim = true;
        }
        if (mapTile) {
          [BASE, MIDDLE].forEach(layer => {
            let id = mapTile.layers[layer];
            drawById(this.ctx, this.atlas, id, gridZoom, x, y);
          });
          if (dim) {
            this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            this.ctx.fillRect(x, y, mapTileSize, mapTileSize);
          }
        }
      }
    }
    this.visibleTiles = visibleTiles;
  }
}
