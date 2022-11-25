var express = require('express');
const Database = require("@replit/database")
const db = new Database();
const fetch = require('node-fetch');

var app = express();
app.use(express.json())

app.get('/', function(req, res) {
  res.send('Servidor rodando');
});

/**
* Deletar a array com links quando precisar
*/
async function deleteLinks() {
  db.delete('ngrok').then(() => { });
}
//deleteLinks()

let urls = []
/**
* Obter lins ngrok de servidores locais
*
*/
app.post('/setLink', async function(req, res) {

  urls = await db.get('ngrok').then(value => { return value });
  if (urls === null) {
    urls = [req.body.url]
    // que deve tirar a urls aqui
   // db.set('ngrok', [...urls, req.body.url])
    db.set('ngrok', [req.body.url])
  }
  if (urls.length > 3) {
    urls.shift();
  }
  db.set('ngrok', [...urls, req.body.url]);
  // listar chaves
  db.list().then(keys => {
    console.log(keys)
  });
  res.send(JSON.stringify({ urls: urls }));
});
/**
*
  *
  */
app.post('/getPointsInPolygon', async function(req, res) {

  urls = await db.get('ngrok').then(value=> {return value});

  // inverter valores na array de lins, os últimos tem mais chance de conexão
  urls.reverse();
  console.log('urls rev', urls)
  console.log(`${urls[0]}/getPointsInPolygon`)

  const response = await fetch(`${urls[0]}/getPointsInPolygon`, {
    method: 'get',
    //body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();

  res.send(JSON.stringify(data))
})

app.listen(3000, function() {
  console.log('App escutando na porta 3000!');
});