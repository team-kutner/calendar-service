const faker = require('faker');
const db = require('./config.js');
const moment = require('moment');

(() => {
  var executed = false;

  if (!executed) {
    executed = true;

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
      db.db.query(query, newListing, (err, result) => {
        if (err) { console.log(err); } else {
          console.log('Listing added');
        }
      });
    }
    var start = moment().format('YYYY-MM-DD');
    const desiredDays = 356;
    for (let i = 0; i < desiredDays; i++) {
      let date = moment(start, 'YYYY-MM-DD').add(i, 'days').format('YYYY-MM-DD');
      let newDate = [
        date,
        faker.random.boolean()
      ];
      let query = 'INSERT INTO dates (date, available) VALUES (?, ?)';
      db.db.query(query, newDate, (err, result) => {
        if (err) { console.log(err); } else {
          console.log('Date added');
        }
      });
    }
  }
})();

// module.exports.seed = seed;
