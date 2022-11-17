/**
 * Módulo http integrado
 * Node.js como servidor web
 */
const http = require('http');

http.createServer(function(req,res){
    res.write('Hello World! - Node como servidor web');
    res.end();

}).listen(8080);