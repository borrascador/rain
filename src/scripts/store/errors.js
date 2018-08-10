const errorTypes = [
  { name: 'Account', min: 100, max: 199 },
  { name: 'Connection', min: 200, max: 299 },
  { name: 'Gameplay', min: 300, max: 799 },
  { name: 'Client', min: 800, max: 899 },
  { name: 'Server', min: 900, max: 999 },
];

function getErrorType(code) {
  return errorTypes.find(type => {
    return code >= type.min && code <= type.max;
  }).name;
}

export const errorLogger = store => next => action => {
  // TODO: Check if action type is a non-empty string
	if (action.type.substring(action.type.length - 5, action.type.length) === 'ERROR') {
    if (!action.payload.code || !action.payload.message) {
      action.payload.code = 800;
      action.payload.message = 'ERROR bad payload';
    }
    const type = getErrorType(action.payload.code);
    console.error(`${type}Error #${action.payload.code}: ${action.payload.message}`);
	}
	next(action);
}
