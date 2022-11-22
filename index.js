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
 
    database: process.env['SQLHOST'],
    port: 1433,
    // If you are on Microsoft Azure, you need encryption:
    //encrypt: true,
  }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
  if (err) {
    console.error('error', err.message);
  } else {
    console.log('querydatabase')
    queryDatabase();
  }
  connection.close();
});

connection.connect();

var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `SELECT * FROM [dbo].[Colaborador]`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.value);
    });
  });

  connection.execSql(request);
}