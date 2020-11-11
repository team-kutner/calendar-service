const mysql = require('mysql2');

const dbName = process.env.DB_SCHEMAS || 'booking';

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'booking'
});

db.connect(function(err) {
  if (err) { return console.error('error: ' + err.message); }
  console.log('Connected to MySQL server');
});


module.exports = db;

// db.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);

// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: 'student',
//   DB: 'booking',
//   dialect: 'mysql',
// };