var http = require('http');
var dt = require('./myfirstmodule');


/**
 * Include your own module.
 * Criação de um módulo próprio, no caso foi criado um arquivo `myfirsmodule.js` e importado no `index.js` para mostrar a data atual.
 * Renomeei um módulo para http-module.
 */
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('The date time currently: ' + dt.myDateTime());
}).listen(8080);