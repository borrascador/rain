import Connect from '../../store/reducers/Connect';
import {getPosition, postMoveAndGetPosition} from '../../store/actions/actions';
import {CAMERA_SPEED, LAYER} from '../constants'
import {addButtonCoords, screenToButtonId, getItemById} from './utils';

export default class Camera {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.playerIcon = 29;
    this.second = 0;

    this.store.dispatch(getPosition());

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
      x: x * size - Math.floor(this.canvas.width / 2) + size / 2,
      y: y * size - Math.floor(this.canvas.height / 2) + size / 2
    };
    // clamp values
    // this.x = Math.max(0, Math.min(this.x, this.maxX));
    // this.y = Math.max(0, Math.min(this.y, this.maxY));
  }

  updateClick(x, y) {
    const clickId = x && y && screenToButtonId(x, y, this.visibleTiles);
    if (clickId) {
      const pos = this.connect.position;
      const tile = getItemById(this.visibleTiles, clickId);
      if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
        this.store.dispatch(postMoveAndGetPosition({
          x: tile.x,
          y: tile.y
        }));
        this.store.dispatch(register());
      }
    }
  }

  switchIcon() {
    this.playerIcon = this.playerIcon === 29 ? 28 : 29;
  }

  update(delta, x, y) {
    this.second += delta;
    if (this.second > 1) {
      this.switchIcon();
      this.second = 0;
    }
    this.updateClick(x, y);
  }

  render() {
    const pos = this.connect.position;
    const {sight} = this.connect.sight;
    const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.connect.map;
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
            xPos: Math.round(x),
            yPos: Math.round(y),
            width: mapTileSize,
            height: mapTileSize,
          }));
          dim = false;
        } else {
          dim = true;
        }
        if (mapTile) {
          [BASE, MIDDLE, TOP].forEach(layer => {
            let id;
            if (pos.x === col && pos.y === row && layer === TOP) {
              id = this.playerIcon; // Player Icon
            } else {
              id = mapTile.layers[layer];
            }
            typeof id === "number" && this.ctx.drawImage(
              this.atlas,
              srcTiles[id].x * srcTileSize,
              srcTiles[id].y * srcTileSize,
              srcTileSize,
              srcTileSize,
              Math.round(x),
              Math.round(y),
              mapTileSize - 1,
              mapTileSize - 1
            );
          });
        }
        if (dim) {
          this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
          this.ctx.fillRect(
            Math.round(x),
            Math.round(y),
            mapTileSize -1 ,
            mapTileSize -1
          );
        }
      }
    }
    this.visibleTiles = visibleTiles;
  }
}
