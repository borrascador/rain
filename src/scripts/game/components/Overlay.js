import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import Loader from '../utils/Loader';
import src from '../../../images/tileset-ui.png';
import {addButtonCoords, screenToButtonId, getItemById} from './utils';

const TRUCK = 31;
const SIZE = 64;

export default class Overlay {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.makeButtons();

    this.loader = new Loader();
    Promise.resolve(this.loader.setImage('tiles', src))
    .then(loaded => {
      this.atlas = this.loader.getImage('tiles');
    });
  }

  makeButtons() {
    const menu = this.connect.getMenuById("overlay");
    this.buttons = menu.buttons;
    this.buttonSize = this.canvas.height / 4;

    // Set button properties
    this.buttons.map((button, idx) => {
      addButtonCoords(button, {
        xPos: this.canvas.width - this.buttonSize,
        yPos: this.buttonSize * idx,
        width: this.buttonSize,
        height: this.buttonSize,
      });
    });
  }

  chooseButton(clickId) {
    const button = getItemById(this.buttons, clickId);
    this.store.dispatch(button.action);
  }

  updateClick(x, y) {
    const clickId = x && y && screenToButtonId(x, y, this.buttons);
    clickId && this.chooseButton(clickId);
  }

  update(delta, x, y) {
    this.updateClick(x, y);
  }

  renderParty() {
    const {srcTileSize, srcTiles} = this.connect.map;
    const {party} = this.connect.party;

    party.map((member, idx) => {
      this.ctx.drawImage(
        this.atlas,
        srcTiles[member.icon].x * srcTileSize,
        srcTiles[member.icon].y * srcTileSize,
        srcTileSize,
        srcTileSize,
        0,
        idx * SIZE,
        SIZE,
        SIZE
      );
      for (let i of Array(member.health).keys()) {
        this.ctx.drawImage(
          this.atlas,
          0,
          192,
          16,
          16,
          64 + i * 24,
          (idx * 2 + 0.4) * 32,
          16,
          16
        );
      };
      for (let i of Array(member.jeito).keys()) {
        this.ctx.drawImage(
          this.atlas,
          16,
          192,
          16,
          16,
          64 + i * 24,
          (idx * 2 + 1.1) * 32,
          16,
          16
        );
      };
    });
  }

  renderVehicle() {
    const {srcTileSize, srcTiles} = this.connect.map;
    const {vehicle} = this.connect.vehicle;

    this.ctx.drawImage(
      this.atlas,
      srcTiles[vehicle.icon].x * srcTileSize,
      srcTiles[vehicle.icon].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      0,
      480 - SIZE,
      SIZE,
      SIZE
    );
    for (let i of Array(vehicle.repair).keys()) {
      this.ctx.drawImage(
        this.atlas,
        0,
        208,
        16,
        16,
        64 + i * 24,
        480 - SIZE + 24,
        16,
        16
      );
    };
  }

  renderZoom() {
    const {srcTileSize, srcTiles} = this.connect.map;

    this.ctx.drawImage(
      this.atlas,
      srcTiles[36].x * srcTileSize,
      srcTiles[36].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - SIZE,
      0,
      SIZE,
      SIZE
    );
    this.ctx.drawImage(
      this.atlas,
      srcTiles[37].x * srcTileSize,
      srcTiles[37].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - SIZE * 2,
      0,
      SIZE,
      SIZE
    );
    this.ctx.drawImage(
      this.atlas,
      srcTiles[35].x * srcTileSize,
      srcTiles[35].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - SIZE * 3,
      0,
      SIZE,
      SIZE
    );
  }

  renderBag() {
    const {srcTileSize, srcTiles} = this.connect.map;

    this.ctx.drawImage(
      this.atlas,
      srcTiles[38].x * srcTileSize,
      srcTiles[38].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - SIZE * 2,
      SIZE * 2,
      SIZE * 2,
      SIZE * 2
    );
  }

  renderButtons() {
    this.buttons.map(button => {
      const xPos = button.xPos + 8;
      const yPos = button.yPos + 8;
      const width = button.width - 16;
      const height = button.height - 16;

      // Make button box
      this.ctx.strokeStyle = '#FFF';
      this.ctx.lineWidth = 4;
      this.ctx.strokeRect(xPos, yPos, width, height);

      // Make button text
      this.ctx.font = '20px MECC';
      this.ctx.fillStyle = '#FFF';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(button.text, xPos + (width / 2), yPos + (height / 2));
    });
  }

  render() {
    this.renderParty();
    this.renderVehicle();
    this.renderZoom();
    this.renderBag();
    // this.renderButtons();
  }
}
