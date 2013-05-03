var servidor = require("./servidor");
var enrutador = require("./enrutador");
var peticiones = require("./peticiones");

var manejardor = {}
manejardor['/'] = peticiones.inicio;
manejardor['/pagina1'] = peticiones.pagina1;
manejardor['/pagina2'] = peticiones.pagina2;
manejardor['/favicon.ico'] = peticiones.favicon;

servidor.iniciar(enrutador.enrutar, manejardor);