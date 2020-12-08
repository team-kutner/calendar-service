const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const momentRandom = require('moment-random');

const writeListingsCass = fs.createWriteStream('server/database/cassandra.csv');

writeListingsCass.write('listingID,name,description,guestMax,pricePerNight,cleaningFee,serviceFee,rating,numRatings,reservations\n');

var writeToCassListings = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 9000000;
  let resID = 26997016;
  var write = () => {
    let success = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.company.catchPhraseDescriptor();
      const description = faker.lorem.sentence();
      const guestMax = faker.random.number({min: 1, max: 15});
      const pricePerNight = faker.random.number({min: 30, max: 550});
      const cleaningFee = faker.finance.amount(10, 120, 2);
      const serviceFee = faker.finance.amount(10, 75, 2);
      const rating = faker.finance.amount(2, 5, 2);
      const numRatings = faker.random.number({min: 1, max: 500});
      var reservations = ``;
      const numOfRes = faker.random.number({min: 1, max: 5});
      for (let j = 0; j < numOfRes; j++) {
        let checkIn = momentRandom('11/25/2021', '12/25/2020').format('YYYY-MM-DD');
        let randomNum = faker.random.number({min: 1, max: 14});
        let checkOut = moment(checkIn, 'YYYY-MM-DD').add(randomNum, 'days').format('YYYY-MM-DD');
        if (j === numOfRes - 1) {
          reservations += `{resid: ${resID}, checkin: ${checkIn}, checkout: ${checkOut}, adults: ${faker.random.number({min: 1, max:15})}, children: ${faker.random.number({min: 0, max: 5})}, infants: ${faker.random.number({min: 0, max: 3})}, totalprice: ${faker.finance.amount(75, 2800, 2)}}`
        } else {
          reservations += `{resid: ${resID}, checkin: ${checkIn}, checkout: ${checkOut}, adults: ${faker.random.number({min: 1, max:15})}, children: ${faker.random.number({min: 0, max: 5})}, infants: ${faker.random.number({min: 0, max: 3})}, totalprice: ${faker.finance.amount(75, 2800, 2)}},`
        }
        resID++;
      }
      const data = `${id}|${name}|${description}|${guestMax}|${pricePerNight}|${cleaningFee}|${serviceFee}|${rating}|${numRatings}|{${reservations}}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        success = writer.write(data, encoding);
      }
    } while (i > 0 && success);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeToCassListings(writeListingsCass, 'utf-8', () => {
  console.log('finished');
  writeListingsCass.end();
});