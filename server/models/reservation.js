const models = require('../models');
const db = require('../database/config.js');

module.exports = {
  getBookingInfo: function(id, callback) {
    // need to grab all the prices, rating, and numratings
    let query = 'SELECT guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings FROM listings WHERE listingID = ?';
    db.db.query(query, id, (err, result) => {
      if (err) { console.log(err); } else {
        callback(result);
      }
    });
  },

  addBookingInfo: function(params, callback) {
    // posts booking info into the DB reservations table

    let query = 'INSERT INTO reservations (listingID, checkIn, checkOut, adults, children, infants, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.db.query(query, params, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('booking added');
        callback(null, result);
      }
    });
  },

  updateReservation: (id, val, column, callback) => {
    let query = `UPDATE reservations SET ${column} = ${val} where resID = ${id}`;
    db.db.query(query, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('reservation updated');
        callback(null, result);
      }
    });
  },

  deleteReservation: (id, callback) => {
    let query = `DELETE FROM reservations WHERE resID = ${id}`;
    db.db.query(query, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('reservation deleted');
        callback(err, null);
      }
    })
  }
};