var fs = require('fs');
var http = require('http');

/**
 * Branch: file-system-read
 * Node.js as file server
 * Read files
 */
http.createServer(function(req, res){
  fs.readFile('demofile1.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
