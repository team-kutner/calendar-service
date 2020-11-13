const models = require('../models');
const db = require('../database/config.js');

module.exports = {
  getBookingInfo: function(id, callback) {
    // need to grab all the prices, rating, and numratings
    let query = 'SELECT pricePerNight, cleaningFee, serviceFee, rating, numRatings FROM listings WHERE listingID = ?';
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
      if (err) { console.log(err); } else {
        callback('Successfully added to reservation');
      }
    });


  }
};