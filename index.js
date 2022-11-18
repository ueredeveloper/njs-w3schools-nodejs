/**
 * branch: http-module
 * Módulo http integrado.
 * Node.js como servidor web.
 * Incluindo cabeçalho.
 * Lendo uma string de consulta.
 * Dividindo uma string de consulta
 */
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let q = url.parse(req.url, true).query;
  let txt = "<h1>Node.js HTTP Module </h1>"
    + "<a href='http://localhost:8080/?year=2023&month=11'>link de teste</a><br>"
    + "<p> </p>"
    + "ano: " + q.year + " mes: " + q.month;

  res.end(txt);

}).listen(8080);