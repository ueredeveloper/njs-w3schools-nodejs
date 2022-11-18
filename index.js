var http = require('http');
var fs = require('fs');

/**
 * Gettin started 
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.rename("myfile.txt", "myfirstfile.txt", function(err){
    if (err) throw err;
    console.log('File renamed');
  });
  res.end('Hello World!');
}).listen(8080);