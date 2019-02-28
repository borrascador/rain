import Connect from '../Connect';
import Animation from '../utils/Animation';
import { clickedLeft } from '../actions/actions';
import { sendEvent } from '../actions/requests';
import { EVENTS } from '../actions/types';
import { LAYER, CAMERA_SPEED } from '../utils/constants';
import { screenToImageButton, checkImageCollision, findTile } from './utils';
import {
  drawById, drawHover, // fillInverseCircle // enable (see todo at bottom)
} from '../utils/draw';
import { MEDIUM_OPAQUE } from '../utils/colors';

const { BOTTOM, MIDDLE } = LAYER;

export default class Camera {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');
    this.icons = loader.getImage('icons');
    this.blink = new Animation(1, 1, 0.5);
    this.fontSize = 16;

    this.connect = new Connect(this.store);
  }

  center(tileSize, xPos, yPos, xCoords, yCoords) {
    this.x = Math.round((xPos + xCoords / 32) * tileSize - Math.floor(this.canvas.width / 2));
    this.y = Math.round((yPos + yCoords / 32) * tileSize - Math.floor(this.canvas.height / 2));
  }

  move(delta, dirx, diry) {
    // move camera
    this.x += dirx * CAMERA_SPEED * delta;
    this.y += diry * CAMERA_SPEED * delta;
    // clamp values
    // this.x = Math.max(0, Math.min(this.x, this.maxX));
    // this.y = Math.max(0, Math.min(this.y, this.maxY));
  }

  update(step) {
    // handle camera movement with arrow keys and mouse position over edges
    let dirx = 0;
    let diry = 0;
    const { keys } = this.connect;
    const { mousePos } = this.connect;
    if (keys.includes('ArrowLeft') || mousePos.x < 25) { dirx = -1; }
    if (keys.includes('ArrowRight') || mousePos.x > this.canvas.width - 25) { dirx = 1; }
    if (keys.includes('ArrowUp') || mousePos.y < 25) { diry = -1; }
    if (keys.includes('ArrowDown') || mousePos.y > this.canvas.height - 25) { diry = 1; }
    if (!(dirx === 0 && diry === 0)) {
      this.move(step, dirx, diry);
    }

    // center camera on player or move player
    const { x, y } = this.connect.clickLeft;
    const clickedPlayer = x && y && this.player && checkImageCollision(x, y, this.player);
    const tile = x && y && screenToImageButton(x, y, this.clickTiles);
    if (clickedPlayer) {
      const { pos, coords, zoom } = this.connect.map;
      const tileSize = this.atlas.tileset.tilewidth * zoom;
      this.center(tileSize, pos.x, pos.y, coords.x, coords.y);
      this.store.dispatch(clickedLeft());
    } else if (tile) {
      const { zoom } = this.connect.map;
      const xCoord = Math.floor((x - tile.xPos) / zoom);
      const yCoord = Math.floor((y - tile.yPos) / zoom);
      this.store.dispatch(clickedLeft());
      this.store.dispatch(
        sendEvent(EVENTS.MOVE, { id: tile.id, x: xCoord, y: yCoord })
      );
    }

    // update player icon blink animation
    this.blink.tick(step);
  }

  render() {
    const {
      pos, coords, positionTarget, coordsTarget, tiles, sight, zoom
    } = this.connect.map;
    const tileSize = this.atlas.tileset.tilewidth * zoom;
    const iconSize = this.icons.tileset.tilewidth * zoom;

    if (!this.x && !this.y) {
      this.center(tileSize, pos.x, pos.y, coords.x, coords.y);
    }
    const startCol = Math.floor(this.x / tileSize);
    const endCol = startCol + Math.ceil((this.canvas.width / tileSize) + 1);
    const startRow = Math.floor(this.y / tileSize);
    const endRow = startRow + Math.ceil((this.canvas.height / tileSize) + 1);

    this.clickTiles = [];
    this.visiblePlayers = [];
    let dim = false;
    for (let col = startCol; col <= endCol; col += 1) {
      for (let row = startRow; row <= endRow; row += 1) {
        const x = col * tileSize - this.x;
        const y = row * tileSize - this.y;
        const tile = findTile(tiles, col, row);

        if (tile) {
          // add only adjacent tiles to list of targetable tiles
          if (Math.abs(pos.x - col) + Math.abs(pos.y - row) <= 1) {
            this.clickTiles.push(Object.assign({}, tile, {
              xPos: x, yPos: y, width: tileSize, height: tileSize
            }));
          }

          // determine if tile is visible or in fog of war
          if (Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
            dim = false;
          } else {
            dim = true;
          }

          // draw tile layers!
          [BOTTOM, MIDDLE].forEach((layer) => {
            if (layer in tile.layers) {
              const id = tile.layers[layer] - 1;
              drawById(this.ctx, this.atlas, id, zoom, x, y);
            }
          });

          // draw player icon if player is in current tile
          if (pos.x === col && pos.y === row) {
            drawById(
              this.ctx,
              this.icons,
              24 + this.blink.getValue(),
              zoom,
              x + coords.x * zoom - iconSize / 2,
              y + coords.y * zoom - iconSize / 2
            );
            this.player = {
              xPos: x + coords.x * zoom - iconSize / 2,
              yPos: y + coords.y * zoom - iconSize / 2,
              width: iconSize,
              height: iconSize,
            };
          }

          // draw movement target if there is one
          if (positionTarget === tile.id) {
            drawById(
              this.ctx,
              this.icons,
              28 + this.blink.getValue(),
              zoom,
              x + coordsTarget.x * zoom - iconSize / 2,
              y + coordsTarget.y * zoom - iconSize / 2
            );
          }

          // draw other player icons
          if (!dim && tile.visitors && tile.visitors.length > 0) {
            this.visiblePlayers = this.visiblePlayers.concat(
              tile.visitors.map((visitor) => {
                drawById(
                  this.ctx,
                  this.icons,
                  26 + this.blink.getValue(),
                  zoom,
                  x + visitor.xCoord * zoom - iconSize / 2,
                  y + visitor.yCoord * zoom - iconSize / 2
                );
                return ({
                  name: visitor.name,
                  xPos: x + visitor.xCoord * zoom - iconSize / 2,
                  yPos: y + visitor.yCoord * zoom - iconSize / 2,
                  width: iconSize,
                  height: iconSize
                });
              })
            );
          }

          // draw fog of war for tiles out of viewing range
          if (dim) {
            this.ctx.fillStyle = MEDIUM_OPAQUE;
            this.ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
      }
    }

    // show names of other visible players
    const { mousePos } = this.connect;
    if (mousePos.x && mousePos.y) {
      const button = screenToImageButton(mousePos.x, mousePos.y, this.visiblePlayers);
      if (button) drawHover(this.ctx, this.fontSize, button);
    }

    // todo: draw ring of light centered on player, not centered on canvas
    // fillInverseCircle(this.ctx, this.canvas, tileSize * sight);
  }
}
