var fs = require('fs');
var http = require('http');

/**
 * Branch: file-system-create-file
 * Criando um arquivo em formtato .txt.
 */
http.createServer(function(req, res){

  // criando um arquivo no formato .txt
  fs.appendFile('myfile1.txt', 'Hello Append File - Create File wiht fs', function(err){
    if (err) throw err;
    console.log('Saved');
  });
  // lendo o arquivo criado
  fs.readFile('myfile1.txt', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
