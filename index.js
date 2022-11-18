var fs = require('fs');
var http = require('http');

/**
 * Branch: file-system-delete
 * Deletando um arquivo
 */

http.createServer(function(req, res){

  // deletando
  fs.unlink("myfile1.txt", function(err){
    if (err) throw error;
    console.log('File deleted!')
  })
 
}).listen(8080);
