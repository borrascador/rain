//
// Client object
// 

import io from 'socket.io-client';

let Client = {};

let types = {
  clickPos: 'CLICK POS',
  tilePos: 'TILE POS' 
};

Client.connect = function() {
  this.socket = io.connect("http://localhost:4200");
  console.log('connecting...');

  this.socket.on('connect', function() {
    console.log('connected');
  });

  this.socket.on('connect_error', function() {
    console.log('connection failed');
  });

  this.socket.on('send id', function(data) {
    console.log('socket id: ' + JSON.stringify(data.userid));
  });
}

Client.sendClick = function(pos) {
  this.socket.emit('send click', {
    type: types.clickPos,
    pos: pos,
  });
}

Client.sendTileClick = function(pos) {
  this.socket.emit('send tile click', {
    type: types.tilePos,
    pos: pos,
  });
}

Client.requestEvent = function(ref) {
  this.socket.emit('request event', {
    ref: ref
  });

  this.socket.on('send event', (data) => {
    this.payload = data;
  });
}



module.exports = Client;
