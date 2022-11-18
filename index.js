var http = require('http');
var dt = require('./myfirstmodule')
/**
 * Branch: modules
 * Incluindo um módulo
 * Criando seu próprio módulo
 * Incluindo seu próprio módulo
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Node.js Modules ' + dt.myDateTime());
  res.end();
}).listen(8080);