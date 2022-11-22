require('dotenv').config();
var Connection = require('tedious').Connection;

var config = {
  server: process.env['SQLHOST'],
  authentication: {
    type: 'default',
    options: {
      userName: process.env['SQLUSERNAME'],
      password: process.env['SQLPASSWORD'],
    }
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: process.env['SQLHOST'],
  }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
  executeStatement();
});

connection.connect();

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
  //select col_ID from Colaborador
  //SELECT * FROM Colaborador

  request = new Request("select col_ID from Colaborador", function (err, rowCount, rows) {
    console.log(err, rowCount, rows)
  });
  connection.execSql(request);
}  