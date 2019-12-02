import { send } from '@giantmachines/redux-websocket';
import Camera from './Camera';
import Connect from '../Connect';
import {
  clickedLeft,
  clickedRight,
  needRender,
  completedRender,
  selectTile,
  eventRequest,
} from '../actions/actions';
import { EVENTS } from '../actions/types';
import {
  screenToImageButton,
  coordsToColRow,
  colRowToCoords,
  findTile,
  matchTile,
} from './utils';
import { drawHover } from '../utils/draw';
import { FOREST_BLACK } from '../utils/colors';

export default class Tactical {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.fontSize = 16;
    this.entities = [];

    this.connect = new Connect(this.store);
    const { zoom } = this.connect;

    this.tactical = this.loader.getImage('tactical', zoom);
    this.player = this.loader.getImage('player', zoom);
    this.trees = this.loader.getImage('trees', zoom);

    this.camera = new Camera(
      this.canvas.width, // width
      this.canvas.height, // height
      0, // xStart
      0, // yStart
      this.tactical.tileset.tilewidth / zoom, // grid size
      zoom,
    );

    this.createOffscreenCanvas();
  }

  createOffscreenCanvas() {
    this.offScreenCanvas = document.createElement('canvas');
    this.offScreenCanvas.width = this.canvas.width;
    this.offScreenCanvas.height = this.canvas.height;
    this.offScreenContext = this.offScreenCanvas.getContext('2d');
    this.offScreenContext.imageSmoothingEnabled = false;
  }

  copyToOnScreen() {
    this.ctx.drawImage(this.offScreenCanvas, 0, 0);
  }

  update(step) {
    const {
      keys,
      clickLeft: { x: lx, y: ly },
      clickRight: { x: rx, y: ry },
      mousePos: { x: mx, y: my },
      currentPlayer,
      selectedAction,
    } = this.connect;

    // handle camera movement with arrow keys and mouse position over edges
    let dirx = 0;
    let diry = 0;
    if (keys.includes('ArrowLeft')) { dirx = -1; }
    if (keys.includes('ArrowRight')) { dirx = 1; }
    if (keys.includes('ArrowUp')) { diry = -1; }
    if (keys.includes('ArrowDown')) { diry = 1; }
    if (!(dirx === 0 && diry === 0)) {
      this.camera.move(step, dirx, diry);
      this.store.dispatch(needRender());
    }

    const leftClickedTile = (
      lx && ly && screenToImageButton(lx, ly, this.visibleTiles)
    );
    if (leftClickedTile) {
      this.store.dispatch(clickedLeft());
      const {
        pos: { x: xPos, y: yPos }, coords: { x: xCoord, y: yCoord },
      } = leftClickedTile;
      if (selectedAction === 'attack') {
        if ((
          Math.abs(currentPlayer.xPos - xPos)
          + Math.abs(currentPlayer.yPos - yPos)
          + Math.abs(currentPlayer.xCoord - xCoord)
          + Math.abs(currentPlayer.yCoord - yCoord)
        ) === 1) {
          const { id } = currentPlayer;
          this.store.dispatch(send(eventRequest(EVENTS.ATTACK, {
            id, xPos, yPos, xCoord, yCoord,
          })));
        }
        this.store.dispatch(selectTile());
      } else {
        this.store.dispatch(selectTile({
          xPos, yPos, xCoord, yCoord,
        }));
      }
    }

    const rightClickedTile = (
      rx && ry && screenToImageButton(rx, ry, this.visibleTiles)
    );
    if (rightClickedTile) {
      this.store.dispatch(clickedRight());
      const {
        pos: { x: xPos, y: yPos }, coords: { x: xCoord, y: yCoord },
      } = rightClickedTile;
      const { id } = currentPlayer;
      const pace = 1;
      this.store.dispatch(send(eventRequest(EVENTS.MOVE, {
        id, xPos, yPos, xCoord, yCoord, pace,
      })));
      this.store.dispatch(selectTile());
    }

    const hoveredTile = (
      mx && my && screenToImageButton(mx, my, this.visibleTiles)
    );
    if (!this.hoveredTile) this.hoveredTile = hoveredTile;

    if (hoveredTile && (
      hoveredTile.pos.x !== this.hoveredTile.pos.x
      || hoveredTile.pos.y !== this.hoveredTile.pos.y
      || hoveredTile.coords.x !== this.hoveredTile.coords.x
      || hoveredTile.coords.y !== this.hoveredTile.coords.y
    )) {
      this.hoveredTile = hoveredTile;
      this.store.dispatch(needRender());
    }
  }

  renderGroundLayer() {
    const {
      tiles,
      selectedTile,
      party,
      selectedPlayer,
      currentPlayer,
    } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    this.offScreenContext.fillStyle = FOREST_BLACK;
    this.offScreenContext.fillRect(xStart, yStart, width, height);

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
      columns,
    } = this.tactical.tileset;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    this.visibleTiles = [];
    this.visiblePartyMembers = [];
    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tileWidth - this.camera.x);
        const y = Math.round(row * tileHeight - this.camera.y);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);

        const {
          xOffset, yOffset, widthOffset, heightOffset,
        } = this.camera.getOffsets(x, y, tileWidth, tileHeight);

        this.visibleTiles.push({
          pos: { x: xPos, y: yPos },
          coords: { x: xCoord, y: yCoord },
          xPos: x + xOffset + xStart, // destX
          yPos: y + yOffset + yStart, // destY
          width: widthOffset, // destWidth
          height: heightOffset, // destHeight
        });

        if (tile && tile.groundLayer) {
          // draw ground layer
          const { groundLayer } = tile;
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -tileWidth && x + xOffset < width)
            && (y + yOffset > -tileHeight && y + yOffset < height)
          ) {
            this.offScreenContext.drawImage(
              this.tactical, // image
              (groundLayer % columns) * tileWidth + xOffset, // srcX
              Math.floor(groundLayer / columns) * tileHeight + yOffset, // srcY
              widthOffset, // srcWidth
              heightOffset, // srcHeight
              x + xOffset + xStart, // destX
              y + yOffset + yStart, // destY
              widthOffset, // destWidth
              heightOffset, // destHeight
            );
          }

          if (matchTile(currentPlayer, tile)) {
            this.currentTile = {
              xPos: x + xOffset + xStart,
              yPos: y + yOffset + yStart,
              width: widthOffset,
              height: heightOffset,
            };
          }

          party.forEach((member) => {
            if (matchTile(member, tile)) {
              this.visiblePartyMembers.push({
                xPos: x + xOffset + xStart,
                yPos: y + yOffset + yStart,
                width: widthOffset,
                height: heightOffset,
                name: member.name,
              });
            }
          });

          if (matchTile(selectedPlayer, tile)) {
            this.selectedPlayerTile = {
              xPos: x + xOffset + xStart,
              yPos: y + yOffset + yStart,
              width: widthOffset,
              height: heightOffset,
            };
          }

          if (matchTile(selectedTile, tile)) {
            this.selectedTile = {
              xPos: x + xOffset + xStart,
              yPos: y + yOffset + yStart,
              width: widthOffset,
              height: heightOffset,
            };
          }
        }
      }
    }
  }

  renderLootLayer() {
    const { tiles } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = this.tactical.tileset;

    const {
      tileheight: playerHeight,
      tilewidth: playerWidth,
      columns,
    } = this.player.tileset;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tileWidth - this.camera.x);
        const y = Math.round(row * tileHeight - this.camera.y);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);

        const {
          xOffset, yOffset, widthOffset, heightOffset,
        } = this.camera.getOffsets(x, y, tileWidth, tileHeight);

        if (tile && tile.loot) {
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -tileWidth && x + xOffset < width)
            && (y + yOffset > -tileHeight && y + yOffset < height)
          ) {
            const icon = 3;
            const widthRatio = playerWidth / tileWidth;
            const heightRatio = playerHeight / tileHeight;

            this.offScreenContext.drawImage(
              this.player, // image
              (icon % columns) * playerWidth - Math.round(widthRatio * xOffset), // srcX
              Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset), // srcY
              widthRatio * widthOffset, // srcWidth
              heightRatio * heightOffset, // srcHeight
              x + xOffset + xStart, // destX
              y + yOffset + yStart, // destY
              widthOffset, // destWidth
              heightOffset, // destHeight
            );
          }
        }
      }
    }
  }

  renderTreeLayer() {
    const { tiles, zoom } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    // set tree opacity based on zoom level
    this.offScreenContext.globalAlpha = 5 / zoom;

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = this.tactical.tileset;

    const {
      tileheight: treeHeight,
      tilewidth: treeWidth,
      columns,
    } = this.trees.tileset;

    // todo find better way to handle commented lines
    const startCol = Math.floor(this.camera.x / tileWidth) - 1; // fixes popping in/out on left
    const endCol = startCol + Math.ceil(width / tileWidth) + 2; // fixes popping in/out on right
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight) + 5; // fixes popping in/out on bottom

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tileWidth - this.camera.x - tileWidth);
        const y = Math.round(row * tileHeight - this.camera.y - treeHeight + tileHeight);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);

        if (tile && tile.treeLayer) {
          // draw tree layer
          const {
            xOffset, yOffset, widthOffset, heightOffset,
          } = this.camera.getOffsets(x, y, treeWidth, treeHeight);
          const { treeLayer } = tile;
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -treeWidth && x + xOffset < width)
            && (y + yOffset > -treeWidth && y + yOffset < height)
          ) {
            this.offScreenContext.drawImage(
              this.trees, // image
              (treeLayer % columns) * treeWidth + xOffset, // srcX
              Math.floor(treeLayer / columns) * treeHeight + yOffset, // srcY
              widthOffset, // srcWidth
              heightOffset, // srcHeight
              x + xStart + xOffset, // destX
              y + yStart + yOffset, // destY
              widthOffset, // destWidth
              heightOffset, // destHeight
            );
          }
        }
      }
    }
    this.offScreenContext.globalAlpha = 1;
  }

  // TODO probably need to rewrite this function and clean everything up
  renderPlayerLayer() {
    const { party, players, npcs } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = this.tactical.tileset;

    const {
      tileheight: playerHeight,
      tilewidth: playerWidth,
      columns,
    } = this.player.tileset;

    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    const entities = [
      ...party.filter(({ online }) => online),
      ...players.filter(({ online }) => online),
      ...npcs,
    ];

    this.entities = [];
    entities.forEach((player) => {
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

        this.offScreenContext.drawImage(
          this.player, // image
          (icon % columns) * playerWidth - Math.round(widthRatio * xOffset), // srcX
          Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset), // srcY
          widthRatio * widthOffset, // srcWidth
          heightRatio * heightOffset, // srcHeight
          x + xOffset + xStart, // destX
          y + yOffset + yStart, // destY
          widthOffset, // destWidth
          heightOffset, // destHeight
        );

        this.entities.push({
          id: player.id,
          pos: { x: xPos, y: yPos },
          coords: { x: xCoord, y: yCoord },
          xPos: x + xOffset + xStart, // destX
          yPos: y + yOffset + yStart, // destY
          width: widthOffset, // destWidth
          height: heightOffset, // destHeight
        });
      }
    });
  }

  renderTileEffects() {
    const { selectedAction } = this.connect;
    if (selectedAction === 'attack') {
      const {
        xPos, yPos, width, height,
      } = this.currentTile;
      this.offScreenContext.fillStyle = 'rgba(128, 0, 0, 0.6)';
      this.offScreenContext.fillRect(xPos - width, yPos, width, height);
      this.offScreenContext.fillRect(xPos + width, yPos, width, height);
      this.offScreenContext.fillRect(xPos, yPos - height, width, height);
      this.offScreenContext.fillRect(xPos, yPos + height, width, height);
    }
    this.visiblePartyMembers.forEach((member) => {
      const {
        xPos, yPos, width, height,
      } = member;
      this.offScreenContext.fillStyle = 'rgba(0, 0, 128, 0.4)';
      this.offScreenContext.fillRect(xPos, yPos, width, height);
    });
    if (this.currentTile) {
      const {
        xPos, yPos, width, height,
      } = this.currentTile;
      this.offScreenContext.fillStyle = 'rgba(16, 16, 160, 0.4)';
      this.offScreenContext.fillRect(xPos, yPos, width, height);
    }
  }

  renderSelectionTile() {
    const {
      selectedTile,
      mousePos: { x: mx, y: my },
    } = this.connect;
    if (selectedTile) {
      const {
        xPos, yPos, width, height,
      } = this.selectedTile;
      this.offScreenContext.fillStyle = 'rgba(128, 128, 128, 0.2)';
      this.offScreenContext.fillRect(xPos, yPos, width, height);
      this.offScreenContext.lineWidth = 4;
      this.offScreenContext.strokeStyle = 'rgba(256, 256, 256, 0.8)';
      this.offScreenContext.strokeRect(xPos, yPos, width, height);
    }

    const hoveredTile = (
      mx && my && screenToImageButton(mx, my, this.visibleTiles)
    );
    if (hoveredTile) {
      const {
        xPos, yPos, width, height,
      } = hoveredTile;
      this.offScreenContext.fillStyle = 'rgba(128, 128, 128, 0.2)';
      this.offScreenContext.fillRect(xPos, yPos, width, height);
      this.offScreenContext.lineWidth = 4;
      this.offScreenContext.strokeStyle = 'rgba(256, 256, 256, 0.8)';
      this.offScreenContext.strokeRect(xPos, yPos, width, height);
    }

    const hoveredPartyMember = (
      mx && my && screenToImageButton(mx, my, this.visiblePartyMembers)
    );
    if (hoveredPartyMember) {
      drawHover(this.offScreenContext, this.fontSize, hoveredPartyMember);
    }
  }

  render() {
    const { currentPlayer, zoom } = this.connect;
    if (currentPlayer) {
      const {
        xPos, yPos, xCoord, yCoord,
      } = currentPlayer;
      this.camera.lazyCenter(xPos, yPos, xCoord, yCoord, zoom);
    }
    if (this.connect.needRender) {
      this.tactical = this.loader.getImage('tactical', zoom);
      this.player = this.loader.getImage('player', zoom);
      this.trees = this.loader.getImage('trees', zoom);
      this.renderGroundLayer();
      this.renderLootLayer();
      this.renderPlayerLayer();
      this.renderTreeLayer();
      this.renderTileEffects();
      this.renderSelectionTile();
      this.store.dispatch(completedRender());
    }
    this.copyToOnScreen();
  }
}
