const faker = require('faker');
const db = require('./config.js');

const listings = [];
const desiredListings = 100;

// for (let i = 0; i < desiredListings; i++) {
//   let newListing = {
//     name: faker.lorem.words({min: 2, max: 5}),
//     description: faker.lorem.sentence(),
//     pricePerNight: faker.finance.amount(30, 750, 2),
//     cleaningFee: faker.finance.amount(10, 120, 2),
//     serviceFee: faker.finance.amount(10, 75, 2),
//     rating: faker.random.number({min: 0, max: 5, precision: 0.01}),
//     numRatings: faker.random.number({min: 1, max: 500})
//   };
//   listings.push(newListing);
// }

for (let i = 0; i < desiredListings; i++) {
  let newListing = [
    faker.lorem.words({min: 2, max: 5}),
    faker.lorem.sentence(),
    faker.finance.amount(30, 750, 2),
    faker.finance.amount(10, 120, 2),
    faker.finance.amount(10, 75, 2),
    faker.random.number({min: 0, max: 5, precision: 0.01}),
    faker.random.number({min: 1, max: 500})
  ];
  let query = 'INSERT INTO listings (name, description, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, newListing, (err, result) => {
    if (err) { console.log(err); } else {
      console.log('Listing added');
    }
  });
}
