const { Sequelize, DataTypes, QueryTypes, OP, Op } = require('sequelize');
require('dotenv').config();

/**
 * Conexão da forma do tutorail DevTeam504.
 * link: https://www.youtube.com/watch?v=UdbvIjpw87k&t=1535s
 */

const sequelize = new Sequelize(process.env.SQLDATABASE, process.env.SQLUSERNAME, process.env.SQLPASSWORD, {
    dialect: 'mssql',
    host: process.env.SQLHOST,
    port: 1433
});
exports.DataTypes = DataTypes;
exports.sequelize = sequelize;
exports.OP = Op;