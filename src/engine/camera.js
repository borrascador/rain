//
// Camera
//

function Camera(map, width, height) {
  this.tsize = map.tsize;
  // x and y are starting position for map
  this.x = ((map.cols * this.tsize) - width) / 2;
  this.y = ((map.rows * this.tsize) - height) / 2;
  this.width = width;
  this.height = height;
  this.maxX = map.cols * this.tsize - width;
  this.maxY = map.rows * this.tsize - height;
} 

Camera.SPEED = 500; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
  // move camera
  this.x += dirx * Camera.SPEED * delta;
  this.y += diry * Camera.SPEED * delta;
  // clamp values
  this.x = Math.max(0, Math.min(this.x, this.maxX));
  this.y = Math.max(0, Math.min(this.y, this.maxY));
};

Camera.prototype.focusTile = function (x, y) {
  // move camera
  this.x = x - Math.floor(this.width / 2) - this.tsize / 2;
  this.y = y - Math.floor(this.height / 2) - this.tsize / 2;
  // clamp values
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
    x: Math.ceil((x + this.x) / this.tsize),
    y: Math.ceil((y + this.y) / this.tsize)
  };
};

Camera.prototype.tileToScreen = function (x, y) {
  return {
    x: x * this.tsize,
    y: y * this.tsize
  };
};

Camera.prototype.hasClick = function (x, y) {
  let validX = (x >= 0) && (x < this.width);
  let validY = (y >= 0) && (Y < this.height);
  return validX && validY;
}

module.exports = Camera;
