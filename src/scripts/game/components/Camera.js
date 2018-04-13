import Connect from '../../store/reducers/Connect';
import Loader from '../utils/Loader';
import src from '../../../images/tileset-smaller.png';
import {receiveMove} from '../../store/actions/actions';
import {CAMERA_SPEED, LAYER} from '../constants'
import {addButtonCoords, screenToButtonId, getItemById} from './utils';

export default class Camera {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.loader = new Loader();
    Promise.resolve(this.loader.setImage('tiles', src))
    .then(loaded => {
      this.atlas = this.loader.getImage('tiles');
    });
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
      const {partyX, partyY} = this.connect.partyPos;
      const tile = getItemById(this.visibleTiles, clickId);
      if (Math.abs(partyX - tile.x) + Math.abs(partyY - tile.y) === 1) {
        this.store.dispatch(receiveMove(tile.x, tile.y));
      }
    }
  }

  update(delta, x, y) {
    this.updateClick(x, y);
  }

  render() {
    const {focusX, focusY} = this.connect.focus;
    const {partyX, partyY} = this.connect.partyPos;
    const {sight} = this.connect.sight;
    const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.connect.map;
    const {BASE, MIDDLE, TOP} = LAYER;

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const origin = this.getOffsetOrigin(mapTileSize, focusX, focusY);
    const startCol = Math.floor(origin.x / mapTileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / mapTileSize) + 1);
    const startRow = Math.floor(origin.y / mapTileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / mapTileSize) + 1);
    const offsetX = -origin.x + startCol * mapTileSize;
    const offsetY = -origin.y + startRow * mapTileSize;
    let visibleTiles = [];
    for (let col = startCol; col <= endCol; col++) {
      for (let row = startRow; row <= endRow; row++) {
        const x = (col - startCol) * mapTileSize + offsetX;
        const y = (row - startRow) * mapTileSize + offsetY;
        const mapTile = this.findTile(mapTiles, col, row);
        if (mapTile && Math.abs(partyX - col) + Math.abs(partyY - row) <= sight) {
          visibleTiles.push(Object.assign({}, mapTile, {
            xPos: Math.round(x),
            yPos: Math.round(y),
            width: mapTileSize,
            height: mapTileSize,
          }));
          [BASE, MIDDLE, TOP].forEach(layer => {
            let id;
            if (partyX === col && partyY === row && layer === TOP) {
              id = 29;
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
              mapTileSize,
              mapTileSize
            );
          });
        }
      }
    }
    this.visibleTiles = visibleTiles;
  }
}

//     const {offsetX, offsetY} = this.connect.offset;
//     const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.connect.map;
//     this.ctx.fillStyle = 'black';
//     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//     // this.ctx.setTransform(1, 0, 0, 1, offsetX, offsetY);
//
//     const {BASE, MIDDLE, TOP} = LAYER;
//     mapTiles.map((mapTile) => {
//       [BASE, MIDDLE, TOP].forEach(layer => {
//         const id = mapTile.layers[layer];
//         if (typeof id === "number") {
//           this.ctx.drawImage(
//             this.atlas,
//             srcTiles[id].x * srcTileSize,
//             srcTiles[id].y * srcTileSize,
//             srcTileSize,
//             srcTileSize,
//             mapTile.x * mapTileSize,
//             mapTile.y * mapTileSize,
//             mapTileSize,
//             mapTileSize
//           );
//         }
//       });
//     });
//   }
// }


//     this.tsize = map.tsize;
//     // x and y are starting position for map
//     this.x = ((map.cols * this.tsize) - width) / 2;
//     this.y = ((map.rows * this.tsize) - height) / 2;
//     this.width = width;
//     this.height = height;
//     this.maxX = map.cols * this.tsize - width;
//     this.maxY = map.rows * this.tsize - height;
//   }
//
//   move (delta, dirx, diry) {
//     // move camera
//     this.x += dirx * Camera.SPEED * delta;
//     this.y += diry * Camera.SPEED * delta;
//     // clamp values
//     this.x = Math.max(0, Math.min(this.x, this.maxX));
//     this.y = Math.max(0, Math.min(this.y, this.maxY));
//   }
//
//   focusTile (x, y) {
//     // move camera
//     this.x = x - Math.floor(this.width / 2) - this.tsize / 2;
//     this.y = y - Math.floor(this.height / 2) - this.tsize / 2;
//     // clamp values
//     this.x = Math.max(0, Math.min(this.x, this.maxX));
//     this.y = Math.max(0, Math.min(this.y, this.maxY));
//   }
//
//   worldToScreen (x, y) {
//     return {x: x - this.x, y: y - this.y};
//   }
//
//   screenToWorld (x, y) {
//     return {x: x + this.x, y: y + this.y};
//   }
//
//   screenToTile (x, y) {
//     return {
//       x: Math.ceil((x + this.x) / this.tsize),
//       y: Math.ceil((y + this.y) / this.tsize)
//     };
//   }
//
//   tileToScreen (x, y) {
//     return {
//       x: x * this.tsize,
//       y: y * this.tsize
//     };
//   }
//
//   hasClick (x, y) {
//     let validX = (x >= 0) && (x < this.width);
//     let validY = (y >= 0) && (y < this.height);
//     return validX && validY;
//   }
// }
