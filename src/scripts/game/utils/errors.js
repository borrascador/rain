const errorMessages = {
  // Register
  '0000': 'Message syntax error',
  '0001': 'Username taken',
  '0002': 'Email taken',

  // Login
  '0100': 'Message syntax error',
  '0101': 'Username or password incorrect',
  '0102': 'User already online',
  '0103': 'Too many login attempts',
  '0104': 'Account suspended',
  '0105': 'Client instance already logged in',

  // Connection
  '0201': 'Response timeout',
  '0202': 'Websocket closed unexpectedly',
  '0203': 'Request type not recognized',
  '0204': 'Response type not recognized',

  // Move
  '0300': 'Message syntax error',
  '0301': 'Illegal move',
  '0302': 'Exceeded move limit',
  '0303': 'Not logged in',

  // Logout
  '0401': 'Account already logged out',
};

const errorTypes = {
  '00': 'Register',
  '01': 'Login',
  '02': 'Connection',
  '03': 'Move',
  '04': 'Logout'
};

function getErrorType(id) {
  return errorTypes[id.substring(0,2)];
}

export function logError(id) {
  const type = getErrorType(id);
  const message = errorMessages[id];
  console.error(`${type}Error #${id}: ${message}`);
}
