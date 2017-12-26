//
// Camera
//

function Camera(map, width, height) {
  // x and y are starting position for map
  this.x = ((map.cols * map.tsize) - width) / 2;
  this.y = ((map.rows * map.tsize) - height) / 2;
  this.width = width;
  this.height = height;
  this.maxX = map.cols * map.tsize - width;
  this.maxY = map.rows * map.tsize - height;
} 

Camera.SPEED = 500; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
  // move camera
  this.x += dirx * Camera.SPEED * delta;
  this.y += diry * Camera.SPEED * delta;
  // clamp values
  // subtracting 1 from this.maxX and this.maxY solved visual bugs
  this.x = Math.max(0, Math.min(this.x, this.maxX));
  this.y = Math.max(0, Math.min(this.y, this.maxY));
};

Camera.prototype.worldToScreen = function (x, y) {
  return {x: x - this.x, y: y - this.y};
};

Camera.prototype.screenToWorld = function (x, y) {
  return {x: x + this.x, y: y + this.y};
};

Camera.prototype.screenToTile = function (x, y) {
  return {
    x: Math.ceil((x + this.x) / map.tsize),
    y: Math.ceil((y + this.y) / map.tsize)
  }
};

module.exports = Camera;
