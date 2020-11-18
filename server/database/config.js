const mysql = require('mysql2');
const faker = require('faker');
const moment = require('moment');

const dbName = process.env.DB_SCHEMAS || 'booking';

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'booking'

});

db.connect(function(err) {
  if (err) { return console.error('error: ' + err.message); }
  console.log('Connected to MySQL server');
});

module.exports.db = db;

// db.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);

// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: 'student',
//   DB: 'booking',
//   dialect: 'mysql',
// };