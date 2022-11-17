/**
 * Módulo http integrado.
 * Node.js como servidor web.
 * Incluindo cabeçalho.
 * Lendo uma string de consulta.
 */
const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();

}).listen(8080);