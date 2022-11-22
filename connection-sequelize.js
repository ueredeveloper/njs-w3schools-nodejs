const { Sequelize, DataTypes, QueryTypes, OP, Op } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.SQLDATABASE, process.env.SQLUSERNAME, process.env.SQLPASSWORD, {
    dialect: 'mssql',
    host: process.env.SQLHOST,
    port: 1433
});
exports.DataTypes = DataTypes;
exports.sequelize = sequelize;
exports.OP = Op;