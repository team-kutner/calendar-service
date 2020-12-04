const faker = require('faker');
const db = require('./config.js');
const moment = require('moment');
const momentRandom = require('moment-random');

var seed = () => {
  var executed = false;

  // 100 primary listings
  const desiredListings = 100;
  for (let i = 0; i < desiredListings; i++) {
    let newListing = [
      faker.company.catchPhraseDescriptor(),
      faker.lorem.sentence(),
      faker.random.number({min: 1, max: 15}),
      faker.random.number({min: 30, max: 550}),
      faker.finance.amount(10, 120, 2),
      faker.finance.amount(10, 75, 2),
      faker.finance.amount(2, 5, 2),
      faker.random.number({min: 1, max: 500})
    ];
    let query = 'INSERT INTO listings (name, description, guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.db.query(query, newListing, (err, result) => {
      if (err) { console.log(err); } else {
        console.log('Listing added');
      }
    });
  }

  // 1000 reservations (secondary listings) that point to a specific listing, making those dates unavailable this is how you track unavailable dates.
  const desiredRes = 1000;

  for (let i = 0; i < desiredRes; i++) {
    let newRes = [
      faker.random.number({min: 1, max: 100}),
      checkin,
      checkout,
      faker.random.number({min: 1, max: 15}),
      faker.random.number({min: 0, max: 5}),
      faker.random.number({min: 0, max: 3}),
      faker.finance.amount(75, 2800, 2)
    ];
    let query = 'INSERT INTO reservations (listingID, checkIn, checkOut, adults, children, infants, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.db.query(query, newRes, (err, result) => {
      if (err) { console.log(err); } else {
        console.log('Reservation added');
      }
    });
  }
};

seed();

module.exports = seed;