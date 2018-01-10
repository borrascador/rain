var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var UUID = require('uuid/v4');

server.listen(4004);

app.get('/', function (req, res) {
  // What is this for? I did this but I'm confused
  res.sendfile('/home/jan/jan/js/rain/index.html');
});

let types = {
  user: 'USER',
  id: 'ID',
};

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
