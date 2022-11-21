var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.MSYQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});