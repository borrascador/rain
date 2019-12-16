import Connect from '../../Connect';
import { coordsToColRow, getColoredImage } from '../utils';

export default class PlayerLayer {
  constructor(store, canvas, ctx, loader, camera) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.camera = camera;

    this.connect = new Connect(this.store);
    this.visibleEntities = [];
  }

  render() {
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tacticalImg = this.loader.getImage('tactical', this.connect.zoom);
    const playerImg = this.loader.getImage('player', this.connect.zoom);

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = tacticalImg.tileset;

    const {
      tileheight: playerHeight,
      tilewidth: playerWidth,
      columns,
    } = playerImg.tileset;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    const players = [
      ...this.connect.party.filter(({ online }) => online),
      ...this.connect.players.filter(({ online }) => online),
      ...this.connect.npcs,
    ];

    this.visibleEntities = [];
    players.forEach((player) => {
      const {
        xPos, yPos, xCoord, yCoord,
        /* health, icon */
      } = player;
      const { col, row } = coordsToColRow(xPos, yPos, xCoord, yCoord);
      if (col >= startCol && col <= endCol && row >= startRow && row <= endRow) {
        const x = Math.round(col * tileWidth - this.camera.x);
        const y = Math.round(row * tileHeight - this.camera.y);
        const {
          xOffset, yOffset, widthOffset, heightOffset,
        } = this.camera.getOffsets(x, y, tileWidth, tileHeight);

        const icon = 0;
        const widthRatio = playerWidth / tileWidth;
        const heightRatio = playerHeight / tileHeight;

        this.ctx.drawImage(
          playerImg, // image
          (icon % columns) * playerWidth - Math.round(widthRatio * xOffset), // srcX
          Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset), // srcY
          widthRatio * widthOffset, // srcWidth
          heightRatio * heightOffset, // srcHeight
          x + xOffset + xStart, // destX
          y + yOffset + yStart, // destY
          widthOffset, // destWidth
          heightOffset, // destHeight
        );

        this.visibleEntities.push({
          ...player,
          image: playerImg, // image
          srcX: (icon % columns) * playerWidth - Math.round(widthRatio * xOffset), // srcX
          srcY: Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset), // srcY
          srcWidth: widthRatio * widthOffset, // srcWidth
          srcHeight: heightRatio * heightOffset, // srcHeight
          destX: x + xOffset + xStart, // destX
          destY: y + yOffset + yStart, // destY
          destWidth: widthOffset, // destWidth
          destHeight: heightOffset, // destHeight
        });

        //   This is the kind of data structure I'm going to need going forward
        //   Especially if the entity list is generated first, then iterated over and rendered in a separate step
        //   The current update step notes in RainGame.js are misleading
        //   In an MMO game, most/all entities and logic will be handled by the server
        //   Therefore there is no need to add/remove entities as part of the game loop
        //   Instead, the entities lists will be generated from game state every tick,
        //   then rendered, then flushed at the end of the tick

        //   First step is to tighten up xPos, yPos, width, height in the code,
        //   using srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight instead
        //   */
      }
    });
  }

  renderPlayerOverlay() {
    this.visibleEntities.forEach((player) => {
      const {
        image,
        srcX, srcY, srcWidth, srcHeight,
        destX, destY, destWidth, destHeight,   
      } = player;
      const coloredImg = getColoredImage(image)
      this.ctx.drawImage(
        coloredImg,
        srcX, srcY, srcWidth, srcHeight,
        destX, destY, destWidth, destHeight,
      );
    });
  }
}