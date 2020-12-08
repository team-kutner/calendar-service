const faker = require('faker');
const moment = require('moment');
const momentRandom = require('moment-random');
const fs = require('fs');



const writeReservationsPG = fs.createWriteStream('server/database/seeding/pgReservations.csv');
writeReservationsPG.write('listingID,checkIn,checkOut,adults,children,infants,totalPrice\n');

var writeToPGReservations = (writer, encoding, callback) => {
  let i = 10000000;
  var write = () => {
    let success = true;
    do {
      i -= 1;
      const listingID = faker.random.number({min: 1, max: 10000000});
      const checkIn = momentRandom('11/25/2021', '12/25/2020').format('YYYY-MM-DD');
      const randomNum = faker.random.number({min: 1, max: 14});
      const checkOut = moment(checkIn, 'YYYY-MM-DD').add(randomNum, 'days').format('YYYY-MM-DD');
      const adults = faker.random.number({min: 1, max: 15});
      const children = faker.random.number({min: 0, max: 5});
      const infants = faker.random.number({min: 0, max: 3});
      const totalPrice = faker.finance.amount(75, 2800, 2);
      const data = `${listingID},${checkIn},${checkOut},${adults},${children},${infants},${totalPrice}\n`;
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

writeToPGReservations(writeReservationsPG, 'utf-8', () => {
  console.log('finished');
  writeReservationsPG.end();
});

// console.time();
// console.timeEnd();