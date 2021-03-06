var express  = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));

var socket  = require('socket.io');

var io = socket(server);
io.sockets.on('connection',newConnection);

function newConnection(socket){
    
    console.log('new connection:'+ socket.id);
    socket.on('mouse',mouseMsg);
    socket.on('index',infoIndex);
    function mouseMsg(data){
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
    function infoIndex(dataIndex){
        socket.broadcast.emit('index',dataIndex);
        console.log(dataIndex);
    }

}

console.log("server running");