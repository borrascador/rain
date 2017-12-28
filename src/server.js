var
    io = require('socket.io'),
    http = require('http'),
    express = require('express'),
    UUID = require('uuid/v4'),
    app = express();

    var server = http.createServer(app);
    var sio = io(server);

    server.listen(4004);


    sio.sockets.on('connection', function(client){
        client.userid = UUID();
        client.emit('onconnected', {id: client.userid});
        console.log(client.userid + " connected");
    });
