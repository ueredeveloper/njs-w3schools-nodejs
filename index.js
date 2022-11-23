const connection = require('./connection-sequelize.js');

/**
 * 
 */

async function test() {
  try {
    await connection.sequelize.authenticate();
    console.log('conectado')
  } catch (error) {
    console.log('error ----- > ', error)
  }
}

test();

//timestamps: false não criar as colunas de data
