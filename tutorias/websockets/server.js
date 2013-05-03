var io = require("socket.io").listen(8080);

io.sockets.on("connection", onConnection);

function onConnection(socket){
	socket.on("message", function(mensaje){
		socket.send(mensaje);
	});
}