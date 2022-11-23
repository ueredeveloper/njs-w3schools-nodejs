var sql = require("mssql");
require('dotenv').config();

/**
 * Conexão com azure utilizando o mssql funcionando.
 */

const { SQLDATABASE, SQLHOST, SQLUSERNAME, SQLPASSWORD } = process.env;

console.log(SQLDATABASE, SQLHOST, SQLUSERNAME, SQLPASSWORD);

var dbConfig = {
  server: SQLHOST,
  database: SQLDATABASE,
  user: SQLUSERNAME,
  password: SQLPASSWORD,
  port: 1433,
  options: {
    encrypt: true,
  },
  pool: {
    max: 30,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

// This function connects to a SQL server, executes a SELECT statement,
// and displays the results in the console.
async function getCustomers() {
  // Create connection instance
  var conn = new sql.ConnectionPool(dbConfig);

  conn.connect()
    // Successfull connection
    .then(function() {

      // Create request instance, passing in connection instance
      var req = new sql.Request(conn);

      // Call mssql's query method passing in params
      req.query("SELECT * FROM Colaborador")
        .then(function(recordset) {
          console.log(recordset);
          conn.close();
        })
        // Handle sql statement execution errors
        .catch(function(err) {
          console.log(err);
          conn.close();
        })

    })
    // Handle connection errors
    .catch(function(err) {
      console.log(err);
      conn.close();
    });
}

getCustomers();