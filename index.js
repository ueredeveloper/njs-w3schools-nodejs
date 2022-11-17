/**
 * Módulo http integrado
 * Node.js como servidor web
 * Incluindo cabeçalho.
 */
const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Adicionar cabeçalho HTTP.');
    res.end();

}).listen(8080);