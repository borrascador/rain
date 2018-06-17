import { store } from './store/store';
import RainGame from './game/index';

window.onload = function() {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const rainGame = new RainGame(store, canvas, ctx);

  rainGame.init();
}
