var http = require('http');
var events = require('events');
var eventEmiter = new events.EventEmitter();

/**
 * Gettin Started
 * Events - Module
 *  Módulo embutido para criar, disparar e ouvir eventos.
 *  EventEmiter - todas as propriedades e métodos necessários.
 *    -> import events e criar uma variável eventEmiter.
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end( `
    <h1> Branch Main </h1>
    <p> branch - events-module </p>
  `);
}).listen(8080);