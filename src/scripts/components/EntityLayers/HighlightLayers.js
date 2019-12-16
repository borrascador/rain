import Connect from '../../Connect';
import { findTile, searchTiles, screenToTile } from '../utils';
import { drawTileText } from '../../utils/draw';
import { alphaRed, alphaForestBlack } from '../../utils/colors';

export default class HighlightLayers {
  constructor(store, canvas, ctx, loader, camera) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.camera = camera;

    this.connect = new Connect(this.store);
  }

  renderAttackTargetTile({ destX, destY, destWidth, destHeight }) {
    this.ctx.fillStyle = alphaRed(0.2);
    this.ctx.fillRect(destX - destWidth, destY, destWidth, destHeight);
    this.ctx.fillRect(destX + destWidth, destY, destWidth, destHeight);
    this.ctx.fillRect(destX, destY - destHeight, destWidth, destHeight);
    this.ctx.fillRect(destX, destY + destHeight, destWidth, destHeight);
  }

  renderTileHighlight({ destX, destY, destWidth, destHeight }) {
    this.ctx.fillStyle = 'rgba(128, 128, 128, 0.2)';
    this.ctx.fillRect(destX, destY, destWidth, destHeight);
  }

  renderTileBorder({ destX, destY, destWidth, destHeight }) {
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'rgba(256, 256, 256, 0.8)';
    this.ctx.strokeRect(destX, destY, destWidth, destHeight);
  }

  renderFogOfWar({ destX, destY, destWidth, destHeight }) {
    this.ctx.fillStyle = alphaForestBlack(0.7);
    this.ctx.fillRect(destX, destY, destWidth, destHeight);
  }

  renderTileEffects(tiles) {
    const { currentPlayer, selectedAction } = this.connect;
    if (currentPlayer) {
      const { xPos, yPos, xCoord, yCoord } = currentPlayer;
      const currentPlayerTile = searchTiles(tiles, xPos, yPos, xCoord, yCoord);
      if (currentPlayerTile && selectedAction === 'attack') {
        this.renderAttackTargetTile(currentPlayerTile);
      }
    }
  }

  renderSelectionEffects(tiles) {
    const { selectedTile } = this.connect;
    if (selectedTile) {
      const { xPos, yPos, xCoord, yCoord } = selectedTile;
      const tile = searchTiles(tiles, xPos, yPos, xCoord, yCoord);
      if (tile) {
        this.renderTileHighlight(tile);
        this.renderTileBorder(tile);
      }
    }
  }

  renderHoverEffects(tiles, players) {
    const { mousePos: { x: mx, y: my } } = this.connect;

    const hoveredTile = mx && my && screenToTile(mx, my, tiles);
    if (hoveredTile) this.renderTileHighlight(hoveredTile);

    const hoveredPartyMember = mx && my && screenToTile(mx, my, players);
    if (hoveredPartyMember) {
      drawTileText(this.ctx, this.fontSize, hoveredPartyMember);
    }
  }

  renderFogOfWarEffects(tiles) {
    const { sightTiles } = this.connect;
    tiles.forEach((tile) => {
      const { xPos, yPos, xCoord, yCoord } = tile;
      const inSight = findTile(sightTiles, xPos, yPos, xCoord, yCoord);
      if (!inSight) {
        this.renderFogOfWar(tile);
      }
    });
  }
}