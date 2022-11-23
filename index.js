const { Sequelize } = require('sequelize');
require('dotenv').config();

/**
 * Conexão com sequelize, azure e sql server funcionando.
 */

const { SQLDATABASE, SQLUSERNAME, SQLPASSWORD, SQLHOST } = process.env;

var sequelize = new Sequelize(SQLDATABASE, SQLUSERNAME, SQLPASSWORD, {
  host: SQLHOST,
  dialect: 'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {

    freezeTableName: true
  }
});

let Colaborador = sequelize.define('Colaborador', {
  col_Nome: {
    type: Sequelize.STRING
  },
  tableName: 'Colaborador',
  timestamps: false
});

async function selectAll (){
  let colaborador = await Colaborador.sync().then(function () {
    return  Colaborador.findAll({
      attributes: ['col_Nome'], 
      raw: true
    })
  });

  colaborador.forEach(c=> {console.log(c)})
}

selectAll()

