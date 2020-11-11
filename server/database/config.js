const mysql = require('mysql2');
const faker = require('faker');
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

const desiredListings = 100;
for (let i = 0; i < desiredListings; i++) {
  let newListing = [
    faker.company.catchPhraseDescriptor(),
    faker.lorem.sentence(),
    faker.finance.amount(30, 750, 2),
    faker.finance.amount(10, 120, 2),
    faker.finance.amount(10, 75, 2),
    faker.finance.amount(0, 5, 2),
    faker.random.number({min: 1, max: 500})
  ];
  let query = 'INSERT INTO listings (name, description, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, newListing, (err, result) => {
    if (err) { console.log(err); } else {
      console.log('Listing added');
    }
  });
}

module.exports = db;

// db.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);

// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: 'student',
//   DB: 'booking',
//   dialect: 'mysql',
// };