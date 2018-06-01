import Connect from '../../store/reducers/Connect';

export default class Party {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new Connect(this.store);
  }

  renderPortrait(icon, idx, srcTileSize, srcTiles) {
    this.ctx.drawImage(
      this.atlas,
      srcTiles[icon].x * srcTileSize,
      srcTiles[icon].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      0,
      idx * 64,
      64,
      64
    );
  }

  renderHealth(health, idx) {
    [...Array(health)].map((_, i) => {
      this.ctx.drawImage(
        this.atlas,
        0, 192, // tilemap position
        16, 16, // original size
        64 + i * 24, (idx * 2 + 0.4) * 32, // screen position
        16, 16 // rendered size
      );
    });
  }

  renderJeito(jeito, idx) {
    [...Array(jeito)].map((_, i) => {
      this.ctx.drawImage(
        this.atlas,
        16, 192, // tilemap position
        16, 16, // original size
        64 + i * 24, (idx * 2 + 1.1) * 32, // screen position
        16, 16 // rendered size
      );
    });
  }

  render() {
    const {srcTileSize, srcTiles} = this.connect.map;
    const {party} = this.connect.party;

    party.map((member, idx) => {
      this.renderPortrait(member.icon, idx, srcTileSize, srcTiles);
      this.renderHealth(member.health, idx);
      this.renderJeito(member.jeito, idx);
    });
  }
}
