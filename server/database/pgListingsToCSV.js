const faker = require('faker');
const fs = require('fs');

const writeListingsPG = fs.createWriteStream('server/database/pgListings.csv');


writeListingsPG.write('name,description,guestMax,pricePerNight,cleaningFee,serviceFee,rating,numRatings\n');



var writeToPGListings = (writer, encoding, callback) => {
  let i = 10000000;

  var write = () => {
    let success = true;
    do {
      i -= 1;
      const name = faker.company.catchPhraseDescriptor();
      const description = faker.lorem.sentence();
      const guestMax = faker.random.number({min: 1, max: 15});
      const pricePerNight = faker.random.number({min: 30, max: 550});
      const cleaningFee = faker.finance.amount(10, 120, 2);
      const serviceFee = faker.finance.amount(10, 75, 2);
      const rating = faker.finance.amount(2, 5, 2);
      const numRatings = faker.random.number({min: 1, max: 500});
      const data = `${name},${description},${guestMax},${pricePerNight},${cleaningFee},${serviceFee},${rating},${numRatings}\n`;
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

writeToPGListings(writeListingsPG, 'utf-8', () => {
  console.log('finished');
  writeListingsPG.end();
});