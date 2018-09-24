import { MODE } from '../../game/constants';
import { updateObject, removeStory } from './utils';

export function makeKeys() {
  let keys = {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
    "Enter": false,
    "Backspace": false,
    "Delete": false,
    "Escape": false,
  };
  for (let i = 48; i <= 57 ; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  for (let i = 65; i <= 90 ; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  for (let i = 97; i <= 122; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  return keys;
}

export function keyDown(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return updateObject(state, {
      keys: updateObject(state.keys, {
        [action.payload.key]: true
      })
    });
  } else {
    return state;
  }
}

export function keyUp(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return updateObject(state, {
      keys: updateObject(state.keys, {
        [action.payload.key]: false
      })
    });
  } else {
    return state;
  }
}

export function mouseDown(state, action) {
  return updateObject(state, {
    xDown: action.payload.x,
    yDown: action.payload.y,
  });
}

export function mouseMove(state, action) {
  if (state.xDown && state.yDown) {
    return updateObject(state, {
      xOffset: state.xOffset + action.payload.x - state.xMouse,
      yOffset: state.yOffset + action.payload.y - state.yMouse,
      xMouse: action.payload.x,
      yMouse: action.payload.y,
    });
  } else {
    return updateObject(state, {
      xOffset: null,
      yOffset: null,
      xMouse: action.payload.x,
      yMouse: action.payload.y,
    });
  }
}

export function mouseUp(state, action) {
  if (
    Math.abs(state.xDown - action.payload.x) < 15 &&
    Math.abs(state.yDown - action.payload.y) < 15
  ) {
    return updateObject(state, {
      xOffset: null,
      yOffset: null,
      xDown: null,
      yDown: null,
      xClick: action.payload.x,
      yClick: action.payload.y,
    });
  } else {
    return updateObject(state, {
      xOffset: null,
      yOffset: null,
      xDown: null,
      yDown: null,
      xDrop: action.payload.x,
      yDrop: action.payload.y,
    });
  }
}

export function clicked(state) {
  return updateObject(state, {
    xClick: null,
    yClick: null,
  });
}

export function zoomIn(state) {
  if (state.zoom < 5) {
    return updateObject(state, {
      zoom: state.zoom + 1
    })
  } else {
    return state;
  }
}

export function zoomOut(state) {
  if (state.zoom > 1) {
    return updateObject(state, {
      zoom: state.zoom - 1
    })
  } else {
    return state;
  }
}

export function setPartyTab(state, action) {
  return updateObject(state, {
    partyTab: action.payload.partyTab,
  });
}

export function changeMode(state, action) {
  return updateObject(state, {
    mode: action.payload.mode,
  });
}

export function closeStory(state) {
  if (state.stories.length > 0) {
    return updateObject(state, {
      stories: state.stories.slice(0, state.stories.length - 1)
    });
  } else {
    return state;
  }
}
