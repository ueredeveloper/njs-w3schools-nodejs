var http = require('http');
var events = require('events');
const e = require('express');
var eventEmiter = new events.EventEmitter();

/**
 * Gettin Started
 * Events - Module
 *  Módulo embutido para criar, disparar e ouvir eventos.
 *  EventEmiter - todas as propriedades e métodos necessários.
 *    -> import events e criar uma variável eventEmiter.
 * Events - EventEmiter
 *  
 */
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  var myEventEmiter = function (){
    console.log('I hear e scream!')
  }

  eventEmiter.on('scream', myEventEmiter);

  eventEmiter.emit('scream');

  res.end( `
    <h1> Branch Main </h1>
    <p> branch - events-module </p>
    <p> branch - events-eventemiter </p>
  `);
}).listen(8080);