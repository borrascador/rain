var initialState = {
  party: {
    pos: {
      x: 2,
      y: 2
    }
  }
};

var map = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case MOVE_PLAYER: