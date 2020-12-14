// const db = require('../database/config.js');
const helpers = require('./helpers.js');
const db =  require('../database/postgresConfig.js');
const redis = require('../database/redisConfig.js');

module.exports = {
  getDates: function(id) {
    // query the database to grab the dates and availability status
    let query = `SELECT checkIn, checkOut FROM reservations WHERE listingID = ${id}`
    return redis.getAsync(`listLId${id}`)
      .then(results => {
        if (results === null) {
          return db.query(query)
          .then(result => {
            var reservations = result.rows;
            var dates = helpers.enumerateDaysBetweenDates(reservations);
            redis.setAsync(`listLId${id}`, JSON.stringify(dates));
            return dates;
          })
        } else {
          console.log(results);
          return JSON.parse(results);
        }
      })
      .catch(err => {
        console.log(err);
        return err;
      })
  },
  createListing: (listing) => {
    let query = 'INSERT INTO listings (name, description, guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    return db.query(query, listing)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
  },
  updateListing: (id, val, column) => {
    let query = `UPDATE listings SET ${column} = ${val} WHERE listingID = ${id}`;
    return db.query(query)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
  },
  deleteListing: (id) => {
    let query = `DELETE FROM listings WHERE listingID = ${id}`;
    return db.query(query)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
  }
};

// Callback based version of all functions to use with non promised mysql:
    // let query = 'SELECT checkIn, checkOut FROM reservations WHERE listingID = ?';
    // db.db.query(query, id, (err, result) => {
    //   if (err) { console.log(err); } else {
    //     callback(helpers.enumerateDaysBetweenDates(results));
    //   }
    // });
    // createListing: (listing, callback) => {
    //   let query = 'INSERT INTO listings (name, description, guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    //   db.db.query(query, listing, (err, result) => {
    //     if (err) {
    //       callback(err, null);
    //     } else {
    //       console.log('Listing added');
    //       callback(null, result);
    //     }
    //   });
    // },
    // updateListing: (id, val, column, callback) => {
    //   let query = `UPDATE listings SET ${column} = ${val} WHERE listingID = ${id}`;
    //   db.db.query(query, (err, result) => {
    //     if (err) {
    //       callback(err, null);
    //     } else {
    //       console.log('listing updated');
    //       callback(null, result);
    //     }
    //   });
    // },
    // deleteListing: (id, callback) => {
    //   let query = `DELETE FROM listings WHERE listingID = ${id}`;
    //   db.db.query(query, (err, result) => {
    //     if (err) {
    //       callback(err, null);
    //     } else {
    //       console.log('listing deleted');
    //       callback(null, result);
    //     }
    //   });
    // }