const models = require('../models');
// const db = require('../database/config.js');
const db = require('../database/postgresConfig.js');
const redis = require('../database/redisConfig.js');

module.exports = {
  getBookingInfo: function(id) {
    // need to grab all the prices, rating, and numratings
    let query = `SELECT guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings FROM listings WHERE listingID = ${id}`;
    return redis.getAsync(`resLId${id}`)
      .then(results => {
        if (results === null) {
          return db.query(query)
          .then(result => {
            result = result.rows;
            console.log(result);
            result[0].cleaningfee = +result[0].cleaningfee
            result[0].servicefee = +result[0].servicefee
            redis.setAsync(`resLId${id}`, JSON.stringify(result));
            return result;
          })
        } else {
          return JSON.parse(results);
        }
      })
      .catch(err => {
        return err;
      })
  },

  addBookingInfo: function(params) {
    // posts booking info into the DB reservations table

    let query = 'INSERT INTO reservations (listingID, checkIn, checkOut, adults, children, infants, totalPrice) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    return db.query(query, params)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
  },

  updateReservation: (id, val, column) => {
    let query = `UPDATE reservations SET ${column} = ${val} where resID = ${id}`;
    return db.query(query)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
  },

  deleteReservation: (id, callback) => {
    let query = `DELETE FROM reservations WHERE resID = ${id}`;
    return db.query(query)
      .then(result => {
        return result;
      })
      .catch(err => {
        return err;
      })
    }
};


// callback pattern for mysql
// getBookingInfo: function(id, callback) {
//   // need to grab all the prices, rating, and numratings
//   let query = 'SELECT guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings FROM listings WHERE listingID = ?';
//   return db.query(query, id, (err, result) => {
//     if (err) { console.log(err); } else {
//       callback(result);
//     }
//   });
// },
// addBookingInfo: function(params, callback) {
//   // posts booking info into the DB reservations table

//   let query = 'INSERT INTO reservations (listingID, checkIn, checkOut, adults, children, infants, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?)';
//   db.db.query(query, params, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       console.log('booking added');
//       callback(null, result);
//     }
//   });
// },

// updateReservation: (id, val, column, callback) => {
//   let query = `UPDATE reservations SET ${column} = ${val} where resID = ${id}`;
//   db.db.query(query, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       console.log('reservation updated');
//       callback(null, result);
//     }
//   });
// },

// deleteReservation: (id, callback) => {
//   let query = `DELETE FROM reservations WHERE resID = ${id}`;
//   db.db.query(query, (err, result) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       console.log('reservation deleted');
//       callback(err, null);
//     }
//   })
// }
