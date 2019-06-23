import Camera from './Camera';
import Connect from '../Connect';
import Animation from '../utils/Animation';
import { clickedLeft } from '../actions/actions';
import { sendEvent } from '../actions/requests';
import { EVENTS } from '../actions/types';
import { LAYER } from '../utils/constants';
import { screenToImageButton, checkImageCollision, findTile } from './utils';
import { drawHover } from '../utils/draw';
import { MEDIUM_OPAQUE } from '../utils/colors';

const { BOTTOM, MIDDLE } = LAYER;

export default class Map {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.atlas = loader.getImage('atlas');
    this.icons = loader.getImage('icons');
    this.blink = new Animation(1, 1, 0.5);
    this.fontSize = 16;

    this.connect = new Connect(this.store);

    this.camera = new Camera(
      this.canvas.width / 2, // width
      this.canvas.height / 2, // height
      this.canvas.width / 4, // xStart
      this.canvas.height / 4, // yStart
      this.atlas.tileset.tilewidth,
    );
  }

  update(step) {
    // handle camera movement with arrow keys and mouse position over edges
    let dirx = 0;
    let diry = 0;
    const { keys } = this.connect;
    if (keys.includes('ArrowLeft')) { dirx = -1; }
    if (keys.includes('ArrowRight')) { dirx = 1; }
    if (keys.includes('ArrowUp')) { diry = -1; }
    if (keys.includes('ArrowDown')) { diry = 1; }
    if (!(dirx === 0 && diry === 0)) {
      this.camera.move(step, dirx, diry);
    }

    // center camera on player or move player
    const { zoom } = this.connect;
    const { x, y } = this.connect.clickLeft;
    const clickedPlayer = (
      x && y && this.player
      && checkImageCollision(x, y, this.player)
    );
    const tile = (
      x && y && this.clickTiles
      && screenToImageButton(x, y, this.clickTiles)
    );
    if (clickedPlayer) {
      const { pos, coords } = this.connect.map;
      this.camera.center(pos.x, pos.y, coords.x, coords.y, zoom);
      this.store.dispatch(clickedLeft());
    } else if (tile) {
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
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tileWidth = this.atlas.tileset.tilewidth * zoom;
    const tileHeight = this.atlas.tileset.tileheight * zoom;
    const iconSize = this.icons.tileset.tilewidth * zoom;

    if (!this.camera.x && !this.camera.y) {
      this.camera.center(pos.x, pos.y, coords.x, coords.y, zoom);
    }

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    this.ctx.fillStyle = '#113322';
    this.ctx.fillRect(xStart, yStart, width, height);

    this.player = null;
    this.target = null;
    this.clickTiles = [];
    this.visiblePlayers = [];
    let dim = false;
    for (let col = startCol; col <= endCol; col += 1) {
      for (let row = startRow; row <= endRow; row += 1) {
        const x = col * tileWidth - this.camera.x;
        const y = row * tileHeight - this.camera.y;
        const mapTileOffsets = this.camera.getOffsets(x, y, tileWidth, tileHeight);
        const tile = findTile(tiles, col, row);

        if (tile) {
          // determine if tile is visible or in fog of war
          if (Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
            dim = false;
          } else {
            dim = true;
          }

          // draw tile layers!
          [BOTTOM, MIDDLE].forEach((layer) => {
            if (layer in tile.layers) {
              const {
                xOffset, yOffset, widthOffset, heightOffset,
              } = mapTileOffsets;
              const id = tile.layers[layer] - 1;
              const { tileheight, tilewidth, columns } = this.atlas.tileset;
              if (
                widthOffset > 0
                && heightOffset > 0
                && (x - xOffset > -tileWidth && x - xOffset < width)
                && (y - yOffset > -tileHeight && y - yOffset < height)
              ) {
                this.ctx.drawImage(
                  this.atlas, // image
                  (id % columns) * tilewidth - (xOffset / zoom), // srcX
                  Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
                  widthOffset / zoom, // srcWidth
                  heightOffset / zoom, // srcHeight
                  x - xOffset + xStart, // destX
                  y - yOffset + yStart, // destY
                  widthOffset, // destWidth
                  heightOffset // destHeight
                );
              }
            }
          });

          // draw fog of war for tiles out of viewing range
          if (dim) {
            const {
              xOffset, yOffset, widthOffset, heightOffset,
            } = mapTileOffsets;
            if (
              widthOffset > 0
              && heightOffset > 0
              && (x - xOffset > -tileWidth && x - xOffset < width)
              && (y - yOffset > -tileHeight && y - yOffset < height)
            ) {
              this.ctx.fillStyle = MEDIUM_OPAQUE;
              this.ctx.fillRect(
                x - xOffset + xStart, // destX
                y - yOffset + yStart, // destY
                widthOffset, // destWidth
                heightOffset // destHeight
              );
            }
          }

          // add only adjacent tiles to list of targetable tiles
          if (Math.abs(pos.x - col) + Math.abs(pos.y - row) <= 1) {
            const {
              xOffset, yOffset, widthOffset, heightOffset,
            } = mapTileOffsets;
            if (
              widthOffset > 0
              && heightOffset > 0
              && (x - xOffset > -tileWidth && x - xOffset < width)
              && (y - yOffset > -tileHeight && y - yOffset < height)
            ) {
              this.clickTiles.push(Object.assign({}, tile, {
                xPos: x - xOffset + xStart,
                yPos: y - yOffset + yStart,
                width: widthOffset,
                height: heightOffset,
              }));
            }
          }

          // store player icon if tile is occupied
          if (pos.x === col && pos.y === row) {
            const xIcon = x + coords.x * zoom - iconSize / 2;
            const yIcon = y + coords.y * zoom - iconSize / 2;
            const {
              xOffset, yOffset, widthOffset, heightOffset,
            } = this.camera.getOffsets(xIcon, yIcon, iconSize, iconSize);
            if (
              widthOffset > 0
              && heightOffset > 0
              && (xIcon - xOffset > -iconSize && xIcon - xOffset < width)
              && (yIcon - yOffset > -iconSize && yIcon - yOffset < height)
            ) {
              const { tileheight, tilewidth, columns } = this.icons.tileset;
              const id = 24 + this.blink.getValue();
              this.player = {
                args: [
                  this.icons, // image
                  (id % columns) * tilewidth - (xOffset / zoom), // srcX
                  Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
                  widthOffset / zoom, // srcWidth
                  heightOffset / zoom, // srcHeight
                  xIcon - xOffset + xStart, // destX
                  yIcon - yOffset + yStart, // destY
                  widthOffset, // destWidth
                  heightOffset // destHeight
                ],
                xPos: xIcon - xOffset + xStart,
                yPos: yIcon - yOffset + yStart,
                width: widthOffset,
                height: heightOffset,
              };
            }
          }

          // store movement target
          if (positionTarget === tile.id) {
            const xIcon = x + coordsTarget.x * zoom - iconSize / 2;
            const yIcon = y + coordsTarget.y * zoom - iconSize / 2;
            const {
              xOffset, yOffset, widthOffset, heightOffset,
            } = this.camera.getOffsets(xIcon, yIcon, iconSize, iconSize);
            if (
              widthOffset > 0
              && heightOffset > 0
              && (xIcon - xOffset > -iconSize && xIcon - xOffset < width)
              && (yIcon - yOffset > -iconSize && yIcon - yOffset < height)
            ) {
              const { tileheight, tilewidth, columns } = this.icons.tileset;
              const id = 28 + this.blink.getValue();
              this.target = {
                args: [
                  this.icons, // image
                  (id % columns) * tilewidth - (xOffset / zoom), // srcX
                  Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
                  widthOffset / zoom, // srcWidth
                  heightOffset / zoom, // srcHeight
                  xIcon - xOffset + xStart, // destX
                  yIcon - yOffset + yStart, // destY
                  widthOffset, // destWidth
                  heightOffset // destHeight
                ],
                xPos: xIcon - xOffset + xStart,
                yPos: yIcon - yOffset + yStart,
                width: widthOffset,
                height: heightOffset,
              };
            }
          }

          // store other players
          if (!dim && tile.visitors && tile.visitors.length > 0) {
            this.visiblePlayers = this.visiblePlayers.concat(
              tile.visitors.map((visitor) => {
                const xIcon = x + visitor.xCoord * zoom - iconSize / 2;
                const yIcon = y + visitor.yCoord * zoom - iconSize / 2;
                const {
                  xOffset, yOffset, widthOffset, heightOffset,
                } = this.camera.getOffsets(xIcon, yIcon, iconSize, iconSize);
                if (
                  widthOffset > 0
                  && heightOffset > 0
                  && (xIcon - xOffset > -iconSize && xIcon - xOffset < width)
                  && (yIcon - yOffset > -iconSize && yIcon - yOffset < height)
                ) {
                  const { tileheight, tilewidth, columns } = this.icons.tileset;
                  const id = 26 + this.blink.getValue();
                  return {
                    args: [
                      this.icons, // image
                      (id % columns) * tilewidth - (xOffset / zoom), // srcX
                      Math.floor(id / columns) * tileheight - (yOffset / zoom), // srcY
                      widthOffset / zoom, // srcWidth
                      heightOffset / zoom, // srcHeight
                      xIcon - xOffset + xStart, // destX
                      yIcon - yOffset + yStart, // destY
                      widthOffset, // destWidth
                      heightOffset // destHeight
                    ],
                    name: visitor.name,
                    xPos: xIcon - xOffset + xStart,
                    yPos: yIcon - yOffset + yStart,
                    width: widthOffset,
                    height: heightOffset,
                  };
                }
                return {};
              })
            );
          }
        }
      }
    }

    // render stored player
    if (this.player) {
      this.ctx.drawImage(...this.player.args);
    }

    // render stored target
    if (this.target) {
      this.ctx.drawImage(...this.target.args);
    }

    // render stored visible players
    this.visiblePlayers.forEach(({ args }) => {
      if (args) this.ctx.drawImage(...args);
    });

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
