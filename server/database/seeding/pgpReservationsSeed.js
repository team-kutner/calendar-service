const moment = require('moment');
const momentRandom = require('moment-random');
const faker = require('faker');
const dbConfig = require('./pgConfig.js');
const pgp = require('pg-promise')({
  capSQL: true
});

const db = pgp(config)


const cs = new pgp.helpers.ColumnSet([
  'listingid',
  'checkin',
  'checkout',
  'adults',
  'children',
  'infants',
  'totalprice'
], {table: 'reservations'});
var numOfRecords = 100;

getNextData = (t) => {
  if (numOfRecords === 0) {
    var data = null;
  } else {
    var data = [];
    for (let i = 0; i < 1000; i++) {
      let checkIn = momentRandom('11/25/2021', '12/25/2020').format('YYYY-MM-DD');
      let randomNum = faker.random.number({min: 1, max: 14});
      let checkOut = moment(checkIn, 'YYYY-MM-DD').add(randomNum, 'days').format('YYYY-MM-DD');
      data.push({
        listingid: faker.random.number({min: 1, max: 10000000}),
        checkin: checkIn,
        checkout: checkOut,
        adults: faker.random.number({min: 1, max: 15}),
        children: faker.random.number({min: 0, max: 5}),
        infants: faker.random.number({min: 0, max: 3}),
        totalprice: faker.finance.amount(75, 2800, 2)
      })
    }
  }
  // if (numOfRecords % 100 === 0) {
    console.log(numOfRecords);
  // }
  numOfRecords--
  return Promise.resolve(data);
}



db.tx('massive-insert', t => {
  const processData = data => {
    if(data) {
      const insert = pgp.helpers.insert(data, cs);
      return t.none(insert)
    }
  };
  return t.sequence(index => getNextData(t).then(processData));
})
  .then(data => {
    console.log('Total batches:', data.total, ', Duration:', data.duration);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(db.$pool.end())