const faker = require('faker');
const fs = require('fs');


const writeListingsCass = fs.createWriteStream('server/database/cassandra.csv');

writeListingsCass.write('listingID,name,description,guestMax,pricePerNight,cleaningFee,serviceFee,rating,numRatings,reservations\n');

var writeToCassListings = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
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

writeToCassListings(writeListingsCass, 'utf-8', () => {
  console.log('finished');
  writeListingsCass.end();
});