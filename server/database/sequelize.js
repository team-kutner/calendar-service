// const { Sequelize } = require('sequelize');
// const { DataTypes } = require('sequelize');
// const dbConfig = require('../database/config.js');

// const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   omitNull: true
// });

// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch (err => console.error('Unable to connect to the database:', err));

// // put all the tables for the DB here STARTING WITH DATE
// const Date = db.define('Date', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   date: {
//     type: DataTypes.DATE
//   },
//   available: {
//     type: DataTypes.BOOLEAN
//   },
//   cleaningFee: {
//     type: DataTypes.DOUBLE
//   },
//   serviceFee: {
//     type: DataTypes.DOUBLE
//   },
//   totalPrice: {
//     type: DataTypes.DOUBLE
//   }
// });



// Date.sync();

// module.exports = {
//   Date: Date,
//   db: db
// };


// const mysql = require('mysql');
// const Sequelize = require('sequelize');

// const db = new Sequelize('booking', 'root', 'student', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const Date = db.define('Date', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   date: {
//     type: DataTypes.DATE
//   },
//   available: {
//     type: DataTypes.BOOLEAN
//   },
//   cleaningFee: {
//     type: DataTypes.DOUBLE
//   },
//   serviceFee: {
//     type: DataTypes.DOUBLE
//   },
//   totalPrice: {
//     type: DataTypes.DOUBLE
//   }
// });

// Date.sync();

// module.exports = {
//   Date: Date,
//   db: db
// };