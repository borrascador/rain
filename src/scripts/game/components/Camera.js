import Connect from '../../store/reducers/Connect';
import Loader from '../utils/Loader';
import src from '../../../images/tileset-smaller.png';
import {CAMERA_SPEED, LAYER} from '../constants.js'
import {clicked} from '../../store/actions/actions';

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

  update(delta) {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      console.log(xClick, yClick);
      this.store.dispatch(clicked());
    }
  }

  render() {
    const {offsetX, offsetY} = this.connect.offset;
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.setTransform(1, 0, 0, 1, offsetX, offsetY);

    const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.connect.map;
    const {BASE, MIDDLE, TOP} = LAYER;
    mapTiles.forEach((mapTile) => {
      [BASE, MIDDLE, TOP].forEach(layer => {
        const id = mapTile.layers[layer];
        if (typeof id === "number") {
          this.ctx.drawImage(
            this.atlas,
            srcTiles[id].x * srcTileSize,
            srcTiles[id].y * srcTileSize,
            srcTileSize,
            srcTileSize,
            mapTile.x * mapTileSize,
            mapTile.y * mapTileSize,
            mapTileSize,
            mapTileSize
          );
        }
      });
    });
  }
}


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
