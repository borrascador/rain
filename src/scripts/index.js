import { store } from './store/store';
import RainGame from './game/index';

window.onload = function() {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;

  const rainGame = new RainGame(store, canvas, ctx);

  rainGame.init();
}
