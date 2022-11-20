var http = require('http');
var fs = require('fs');

/**
 * Events in Node.js
 * para rodar repositório adicionar no package.json 
 *  scripts {start: node index.js}
 */
http.createServer(function (req, res) {

  var rs = fs.createReadStream('./demofile.txt');
  
  rs.on('open', function(){
    console.log("The file is open! ")
  });
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);