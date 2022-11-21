var http = require("http");
var fs = require('fs');
var formidable = require('formidable');

/**
 * Upload files
 *  -> criar um formulário
 *  -> utilizar o módulo formidable
 */
http.createServer(function (req, res) {

  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      // está dando erro, file undefined
      var oldpath = files.filetoupload.filepath;
      var newpath = 'C:/Users/fabricio.barrozo/' + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function(err){
        if(err) throw err;
        res.write('File uploaded and moved');
        res.end();
      });
      res.write('File uploaded!');
      res.end();
    })
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <form action="fileupload" method="post" encrypted="multpart/form-data">
      <input name="file" type="file" name="fileupload"></input><br>
      <input type="submit"/>
    </form>
  `);
  return res.end();

}).listen(8080);