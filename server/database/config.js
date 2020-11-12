const mysql = require('mysql2');
const faker = require('faker');
const moment = require('moment');
const seed = require('./seed.js');

const dbName = process.env.DB_SCHEMAS || 'booking';

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'booking'
});

let connect = () => {
  return new Promise((resolve, reject) => {
    db.connect(function(err) {
      if (err) { return console.error('error: ' + err.message); }
      resolve(console.log('Connected to MySQL server'));
    });
  });
};

connect()
  .then(() => { seed.seed(); console.log('here'); })
  .catch(err => console.log(err));

module.exports.db = db;

// db.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);

// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: 'student',
//   DB: 'booking',
//   dialect: 'mysql',
// };