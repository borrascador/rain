var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var UUID = require('uuid/v4');
var events = require('./events.json');

server.listen(4200);

app.get('/', function (req, res) {
  // What is this for? I did this but I'm confused
  res.sendfile('/home/jan/jan/js/rain/index.html');
});

let types = {
  user: 'USER',
  id: 'ID',
};

const rawResources = ['WOOD', 'STONE', 'ORE', 'OIL', '', 'FISH'];
const processedResources = ['FUEL', 'TRUCKS', 'CANOES', 'AMMO', 'CARPARTS', 'TOOLS'];
const tileTypes = ['RIVER', 'ROAD', 'FOREST', 'PLAIN'];

function Player(nick, playerClass){
    this.nick = nick;
    this.playerClass = playerClass;
    this.tileOwned = null;
    this.sightRange = 4;
    this.claimTiles = function (centerTile){
        // Claim 3x3 grid centered on this tile
        if (tileOwned != null){
            console.log("Error: Player already owns a tile.");
        } else {
            // Update Player
            this.tileOwned = centerTile;

            // Update 9 tiles
            var Tiles = [centerTile];
            Tiles.push[centerTile - 1];
            Tiles.push[centerTile + 1];
            for (var i = 0; i < 3; i++){
                Tiles.push[centerTile - mapWidth + i-1];
                Tiles.push[centerTile + mapWidth + i-1];
            }
            for (var t in Tiles){
                t.owner = this;
            }
        }
    };
}

function Resource(type, quantity){
    this.type = type;
    this.quantity = quantity;
}

var players = [];
var mapWidth = 10;
var mapHeight = 10;

function rollResource(type, chance, min, max){
    var q = 0;
    if (Math.random() < chance){
        q =  min + Math.random() * max;
    }
    return new Resource(type, q);
}

function Tile(type, index){
    this.owner = null;
    this.collectors = null;
    this.resources = [];
    this.type = type;
    this.x = Math.floor(index/mapWidth);
    this.y = index - x;
    this.generateResources = function(){
        switch (type){
            case 'RIVER':
                break;
            case 'FOREST':
                break;
            case 'ROAD':
                break;
            case 'PLAIN':
                break;
        }
    };
}

function Encounter(player1, player2){
    this.player1 = player1;
    this.player2 = player2;

}

function handleEncounterMessage(){

}

function handleMoveMessage(){

}

function handleUpdateMessage(){

}

// L1 distance
function dist(tile1, tile2){
    return Math.abs(tile2.x - tile1.x) + Math.abs(tile2.y - tile1.y);
}

// This will be sent every few seconds
function sendHeartBeat(socket){
    // Send all players within sight range
    for (var player in players){

    }
}

let users = [];

io.on('connection', function(socket) {
  socket.userid = UUID();
  let user = {
    type: types.user,
    userid: socket.userid,
    loginTimeStart: Date.now(),
  };
  users.push(user);

  let time = getTimestamp();
  console.log('+-- ' + time + ' Socket ' + socket.userid + ' connected');
  console.log('|');

  socket.emit('send id', {
    type: types.id,
    userid: socket.userid,
  });

  socket.on('disconnect', function() {
    let time = getTimestamp();
    console.log('x-- ' + time + ' Socket ' + socket.userid + ' disconnected');
    console.log('|');
  });

  socket.on('send click', function(data) {
    let time = getTimestamp();
    let pos = JSON.stringify(data.pos);
    console.log('i-- ' + time + ' Socket ' + socket.userid + ' click position: ' + pos);
    console.log('|');
  });

  socket.on('send tile click', function(data) {
    let time = getTimestamp();
    let pos = JSON.stringify(data.pos);
    console.log('i-- ' + time + ' Socket ' + socket.userid + ' tile clicked: ' + pos);
    console.log('|');
  });

  socket.on('request event', function(data) {
    let requestedEvent = events[data.ref];
    socket.emit('send event', requestedEvent);
  });

});

function getTimestamp() {
  let date = new Date;
  let now = {
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }

  for (var unit in now) {
    if (now.hasOwnProperty(unit)) {
      if (now[unit].toString().length < 2) {
        now[unit] = '0' + now[unit];
      }
    }
  }

  let currentDate = now.month + '-' + now.day;
  let currentTime = now.hours + ':' + now.minutes + ':' + now.seconds;
  return '[' + currentDate + '|' + currentTime + ']';
}

function logStart() {
  let time = getTimestamp();
  console.log('*-- ' + time + ' Server active');
  console.log('|');
}

logStart();
