import Connect from '../Connect';

export default class BottomLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.new = loader.getImage('new');
    this.connect = new Connect(this.store);
  }

  render() {
    const { zoom } = this.connect.map;
    const tileSize = 32 * zoom;

    const origin = { x: 0, y: 0 };
    const startCol = Math.floor(origin.x / tileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / tileSize) + 1);
    const startRow = Math.floor(origin.y / tileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / tileSize) + 1);

    for (let col = startCol; col <= endCol; col += 1) {
      for (let row = startRow; row <= endRow; row += 1) {
        const x = col * tileSize - origin.x;
        const y = row * tileSize - origin.y;
        this.ctx.drawImage(this.new, 0, 0, 32, 32, x, y, tileSize, tileSize);
      }
    }
  }
}
