const sql = require('mssql');
require('dotenv').config();

/**
 * Branch: 
 * Conexão funcionando com azure.
 */

let config = {
  localhost: process.env.SQLHOST,
  database: process.env.SQLDATABASE,
  username: process.env.SQLUSERNAME,
  password: process.env.SQLPASSWORD
}

async function selecionarColaborador() {
  let { localhost, database, username, password } = config;

  console.log(localhost, database, username, password)

  try {
    await sql.connect(`
      Server=${localhost},1433;
      Database=${database};
      User Id=${username};
      Password=${password};
      Encrypt=true')
    `);
    const result = await sql.query`select * from Colaborador`
    console.dir(result);
  } catch (err) {
    console.log(err);
  }
}

selecionarColaborador();