const sql = require('mssql');
require('dotenv').config();

let config = {
  localhost: process.env.SQLHOST,
  database: process.env.SQLDATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD
}

async function selecionarColaborador () {
  let { localhost, database, username, password } = config;
  console.log('conexão inicializando')

  try {
    // make sure that any items are correctly URL encoded in the connection string
    //await sql.connect(`Server=${localhost},1433;Database=${database};User Id=${username};Password=${password};Encrypt=true`)
    await sql.connect(`Server=${localhost};Database=${database};Authentication=azure-active-directory-password;User Id=${username};Password=${password};Encrypt=true`)
    const result = await sql.query`select * from Colaborador`
    console.dir(result);
  } catch (err) {
    console.log(err);
  }
}

selecionarColaborador();