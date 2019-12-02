const types = [
  { name: 'Account', min: 100, max: 199 },
  { name: 'Connection', min: 200, max: 299 },
  { name: 'Gameplay', min: 300, max: 799 },
  { name: 'Client', min: 800, max: 899 },
  { name: 'Server', min: 900, max: 999 },
];

function getErrorType(code) {
  return types.find(type => code >= type.min && code <= type.max).name;
}

// NOTE: First argument should be store, but it is unused
const errorLogger = () => next => (action) => {
  // TODO: Check if action type is a non-empty string
  const actionSignature = action.type.substring(
    action.type.length - 5, action.type.length,
  );
  if (actionSignature === 'ERROR') {
    if (!action.payload.code) {
      Object.assign(action, {
        payload: {
          code: 800,
          message: 'ERROR bad payload',
        },
      });
    }
    const type = getErrorType(action.payload.code);
    if (action.payload.message) {
      console.error(
        `${type}Error #${action.payload.code}: ${action.payload.message}`,
      );
    } else {
      // TODO: Lookup some error messages here?
      console.error(`${type}Error #${action.payload.code}`);
    }
  }
  next(action);
};

export { errorLogger as default };
