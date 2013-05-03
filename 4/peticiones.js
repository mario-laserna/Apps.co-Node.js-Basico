function inicio(respuesta){
	console.log("Has entrado a la pagina de inicio");
	//return "Inicio";
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página de inicio");
	respuesta.end();
}

function pagina1(respuesta){
	console.log("Has entrado a la pagina 1");
	//return "Pagina 1";
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página 1");
	respuesta.end();
}

function pagina2(respuesta){
	console.log("Has entrado a la pagina 2");
	//return "Pagina 2";
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página 2");
	respuesta.end();
}

function favicon(respuesta){
	console.log("Se ha pedido favicon");
	//return "";
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("");
	respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;