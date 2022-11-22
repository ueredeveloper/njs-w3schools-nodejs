const { Sequelize } = require('sequelize');
require('dotenv').config();

const { ADASA_DATABASE, ADASA_USERNAME, ADASA_PASSWORD, ADASA_HOST } = process.env;

var sequelize = new Sequelize(ADASA_DATABASE, ADASA_USERNAME, ADASA_PASSWORD, {
  host: ADASA_HOST,
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

let Usuario = sequelize.define('USUARIO', {
  NOME: {
    type: Sequelize.STRING
  },
  tableName: 'USUARIO',
  timestamps: false
});

async function selectAll (){
  let usuario = await Usuario.sync().then(function () {
    return  Usuario.findAll({
      attributes: ['NOME'], 
      raw: true
    })
  });

  usuario.forEach(u=> {console.log(u)})
}

selectAll()
