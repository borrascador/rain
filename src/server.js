var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var UUID = require('uuid/v4');

server.listen(4004);

app.get('/', function (req, res) {
  // What is this for? I did this but I'm confused
  res.sendfile('/home/jan/jan/js/rain/index.html');
});

io.on('connection', function(socket) {
  socket.userid = UUID();
  console.log('Connected to ' + socket.userid);

  socket.emit('send id', {
    id: socket.userid
  });

  socket.on('disconnect', function() {
    console.log('Socket ' + socket.userid + ' disconnected');
  });

  socket.on('send click', function(data) {
    console.log('position: ' + JSON.stringify(data.pos));
  });
});
