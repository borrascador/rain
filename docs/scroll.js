var map = {
    cols: 12,
    rows: 12,
    tsize: 128,
    layers: [[
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
        [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],
    ], [
        [0,0],[2,1],[0,0],[4,1],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [1,1],[2,3],[1,3],[4,4],[1,4],[3,1],[3,4],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[4,1],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[4,1],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[4,3],[5,1],[1,5],[5,4],[5,1],[5,2],[4,2],[5,2],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[4,3],[5,3],[4,3],[5,1],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
        [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[2,1],[0,0],[0,0],[0,0],[0,0],[0,0],
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    }
};

function Camera(map, width, height) {
    this.x = width / 2;
    this.y = height / 2;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}

Camera.SPEED = 512; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
    // move camera
    this.x += dirx * Camera.SPEED * delta;
    this.y += diry * Camera.SPEED * delta;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', 'images/tileset-small.png'),
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');
    this.camera = new Camera(map, 800, 800);
};

Game.update = function (delta) {
    // handle camera movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

    this.camera.move(delta, dirx, diry);
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile[0] && tile[1] !== 0) { // 0 => empty tile
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    (tile[0]-1) * map.tsize, // source x
                    (tile[1]-1) * map.tsize, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(0);
    // draw map top layer
    this._drawLayer(1);
};
