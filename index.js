var fs = require('fs');
var http = require('http');

/**
 * Branch: file-system-open
 * Abrir um arquivo em formtato .txt.
 */
http.createServer(function(req, res){

  // criando um arquivo txt com fs.open()
  fs.open('openfile.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('Saved!')
  })
  // lendo o arquivo criado
  fs.readFile('openfile.txt', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
