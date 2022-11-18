var fs = require('fs');
var http = require('http');

/**
 * Branch: file-system-write
 * Criando um arquivo em formtato .txt.
 */
http.createServer(function(req, res){

  //criando um arquivo com writeFile()
  fs.writeFile('myfile3.txt', 'Hello Write File!', function(err){
    if(err) throw err;
    console.log("Save Write file!");
  })
  // lendo o arquivo criado
  fs.readFile('myfile3.txt', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
