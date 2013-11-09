var http=require('http'); 
var contador = new Array();
http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/plain'}); 
    var seccion=req.url.split("/")[1]; 
	if (contador[seccion] == null) contador[seccion] = 0;
	else contador[seccion]++;
	if (seccion == "")
		res.end('Esta es la ventana principal.<br>Accesos totales a esta web:'+contador[seccion]); 
	else
		res.end('Esta es la seccion '+seccion+', direccion: '+req.connection.remoteAddress+'<br>Accesos totales a esta web:'+contador[seccion]); 
}).listen('8080', '127.0.0.1'); 
console.log('Server running at http://127.0.0.1:8080/');

// Diferenciar la pantalla principal '' del resto de secciones
// En la principal mostrar en html y json los accesos a todas las secciones con: contador, hora de conexion, ip
// En cada seccion mostrar solo los accesos a esa seccion
// En todos los casos poner la cabecera del ejercicio como los otros

// Subir a github