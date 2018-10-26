import { MODE, SLOTS } from '../../game/constants';
import {
  updateObject, updateItemInArray, updatePositionInArray, removeStory
} from './utils';

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

export function mouseDownLeft(state, action) {
  return updateObject(state, {
    mouseDownLeft: { x: action.payload.x, y: action.payload.y },
    mouseDrop: { x: null, y: null }
  });
}

export function mouseDownRight(state, action) {
  return updateObject(state, {
    mouseDownRight: { x: action.payload.x, y: action.payload.y }
  });
}

export function mouseMove(state, action) {
  if (state.mouseDownLeft.x && state.mouseDownLeft.y) {
    return updateObject(state, {
      mouseOffset: {
        x: state.mouseOffset.x + action.payload.x - state.mousePos.x,
        y: state.mouseOffset.y + action.payload.y - state.mousePos.y,
      },
      mousePos: { x: action.payload.x, y: action.payload.y }
    });
  } else {
    return updateObject(state, {
      mouseOffset: { x: null, y: null },
      mousePos: { x: action.payload.x, y: action.payload.y }
    });
  }
}

export function mouseUpLeft(state, action) {
  if (
    Math.abs(state.mouseDownLeft.x - action.payload.x) < 15 &&
    Math.abs(state.mouseDownLeft.y - action.payload.y) < 15
  ) {
    return updateObject(state, {
      mouseOffset: { x: null, y: null },
      mouseDownLeft: { x: null, y: null },
      clickLeft: { x: action.payload.x, y: action.payload.y }
    });
  } else {
    return updateObject(state, {
      mouseOffset: { x: null, y: null },
      mouseDownLeft: { x: null, y: null },
      mouseDrop: { x: action.payload.x, y: action.payload.y }
    });
  }
}

export function mouseUpRight(state, action) {
  return updateObject(state, {
    mouseDownRight: { x: null, y: null },
    clickRight: { x: action.payload.x, y: action.payload.y }
  });
}

export function clickedLeft(state) {
  return updateObject(state, {
    clickLeft: { x: null, y: null }
  });
}

export function clickedRight(state) {
  return updateObject(state, {
    clickRight: { x: null, y: null }
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

export function dragItem(state, action) {
  return updateObject(state, {
    draggedItem: updateObject(action.payload.item, {
      quantity: action.payload.quantity,
      type: SLOTS.DRAG
    }),
    draggedOrigin: updateObject(action.payload.item, {
      quantity: action.payload.item.quantity - action.payload.quantity,
      x: action.payload.item.xPos - action.payload.x,
      y: action.payload.item.yPos - action.payload.y
    })
  });
}

export function endDrag(state) {
  return updateObject(state, {
    draggedItem: null,
    draggedOrigin: null
  });
}

// export function setItemPosition(state, action) {
//   return updateObject(state, {
//     inventory: updateItemInArray(state.inventory, action.payload.id, (item) => {
//       return updateObject(item, {
//         type: action.payload.type,
//         position: action.payload.position
//       });
//     })
//   });
// }

// TODO: Enable this and delete above when server-side item positioning is ready
// NOTE: See Items.js, line 125
// export function setItemPosition(state, action) {
//   const { start, end } = action.payload;
//   return updateObject(state, {
//     inventory: updatePositionInArray(
//       state.inventory, start.type, start.position,
//       (item) => updateObject(item, { type: end.type, position: end.position })
//     )
//   });
// }

export function refreshSlots(state, action) {
  return updateObject(state, {
    slots: action.payload.slots,
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

export function removePartyMember(state, action) {
  return updateObject(state, {
    party: state.party.filter(member => member.id !== action.payload.id)
  });
}
