/**
 * Módulo http integrado.
 * Node.js como servidor web.
 * Incluindo cabeçalho.
 * Lendo uma string de consulta.
 */
const http = require('http');
const url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    
    res.end(txt);

}).listen(8080);