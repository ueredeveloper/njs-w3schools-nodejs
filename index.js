var http = require('http');

/**
 * Primeiro exemplo. Também instalei o http (npm i http)
 */
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);