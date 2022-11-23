var mysql = require('mysql');
require('dotenv').config();

const {MYSQLHOST, MYSQLDATABASE, MYSQLUSERNAME, MYSQLPASSWORD} = process.env;

console.log(MYSQLHOST, MYSQLDATABASE, MYSQLUSERNAME, MYSQLPASSWORD);

var con = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSERNAME,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "CREATE TABLE customers (name VARCHAR(205), address VARCHAR(255))";

  con.query(sql, function(err, result){
    if(err) throw err;

    console.log("Table created!")
  })


});