import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RainGame from './RainGame';
import AppRoot from './dialogs/AppRoot';

window.onload = () => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');

  window.oncontextmenu = () => false;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;
  ctx.textBaseline = 'alphabetic';

  const rainGame = new RainGame(store, canvas, ctx);

  rainGame.init();

  ReactDOM.render(
    <Provider store={store}>
      <AppRoot />
    </Provider>,
    document.getElementById('app-root'),
  );
};
