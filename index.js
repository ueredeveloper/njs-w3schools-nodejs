var sql = require("mssql");

// segunda forma de conexão mssql

var dbConfig = {
  server: process.env['SQLHOST'],
  database: process.env['SQLHOST'],
  user: process.env['SQLUSERNAME'],
  password: process.env['SQLPASSWORD'],
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: false
  },
  pool: {
    max: 30,
    min: 0,
    idleTimeoutMillis: 30000
  }


  
  /*
    encrypt=true;
                trustServerCertificate=false;
                hostNameInCertificate=*.database.windows.net;
                loginTimeout=30;
          
          fabricio.barrozo@srvsqlhomolog1*/

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
      req.query("SELECT * FROM [dbo].[Colaborador]")
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