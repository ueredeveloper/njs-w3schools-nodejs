const sql = require('mssql');
require('dotenv').config();

const sqlConfig = {
  user:  process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.SQLDATABASE,
  server: process.env.SQLHOST,
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

async function select () {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig)
    const result = await sql.query`select * from Colaborador`
    console.dir(result)
   } catch (err) {
    console.log(err)
   }
}

select();