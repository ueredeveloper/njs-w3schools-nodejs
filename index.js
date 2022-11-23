var mysql = require('mysql');
require('dotenv').config();

const { MYSQLHOST, MYSQLDATABASE, MYSQLUSERNAME, MYSQLPASSWORD } = process.env;

console.log(MYSQLHOST, MYSQLDATABASE, MYSQLUSERNAME, MYSQLPASSWORD);

var con = mysql.createConnection({
  host: MYSQLHOST,
  user: MYSQLUSERNAME,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // se a tabela estiver criada, deletá-la primeiro DROP TABLE customers
  //var sql = `DROP TABLE customers`
  // criar tabela sem id
  //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // editar tabela adicionando id auto increment e com primary key
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Table created!")
  })


});