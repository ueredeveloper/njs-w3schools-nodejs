var http = require('http');
/**
 * Criando um módulo
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Getting Started!');
}).listen(8080);