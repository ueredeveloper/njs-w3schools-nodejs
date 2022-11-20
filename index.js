var http = require('http');
var fs = require('fs');

/**
 * Gettin started 
 */
http.createServer(function (req, res) {

  var rs = fs.createReadStream('./demofile.txt');
  
  rs.on('open', function(){
    console.log("The file is open! ")
  });
  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);