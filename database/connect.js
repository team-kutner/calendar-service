// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('booking', 'root', 'student', {
//   host: 'localhost',
//   dialect: 'mysql'
// });


// Promise.resolve(sequelize.authenticate())
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch (err => console.error('Unable to connect to the database:', err));

const mysql = require('mysql');

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