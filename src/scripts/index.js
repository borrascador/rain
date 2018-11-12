import { store } from './store/store';
import RainGame from './game/index';

window.onload = function() {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  window.oncontextmenu = () => false;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;
  ctx.textBaseline = 'alphabetic';

  const rainGame = new RainGame(store, canvas, ctx);

  rainGame.init();
}
