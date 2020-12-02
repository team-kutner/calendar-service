const models = require('../models');
const db = require('../database/config.js');
const moment = require('moment');

module.exports = {
  getDates: function(id, callback) {
    // query the database to grab the dates and availability status
    let query = 'SELECT checkIn, checkOut FROM reservations WHERE listingID = ?';
    db.db.query(query, id, (err, result) => {
      if (err) { console.log(err); } else {

        var unavailable = [];
        var enumerateDaysBetweenDates = function(startDate, endDate) {

          var currDate = moment(startDate).startOf('day');
          var lastDate = moment(endDate).startOf('day');

          while (currDate.add(1, 'days').diff(lastDate) < 0) {
            unavailable.push(currDate.clone().toDate());
          }
        };
        for (var dates of result) {
          enumerateDaysBetweenDates(dates.checkIn, dates.checkOut);
        }
        const unique = new Set;
        for (var date of unavailable) {
          let newDate = date.toISOString().substring(0, 10);
          unique.add(newDate);
        }
        let results = Array.from(unique).sort();
        callback(results);
      }
    });
  },
  createListing: (listing, callback) => {
    let query = 'INSERT INTO listings (name, description, guestMax, pricePerNight, cleaningFee, serviceFee, rating, numRatings) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.db.query(query, listing, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('Listing added');
        callback(null, result);
      }
    });
  },
  updateListing: (id, val, column, callback) => {
    let query = `UPDATE listings SET ${column} = ${val} WHERE listingID = ${id}`;
    db.db.query(query, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('listing updated');
        callback(null, result);
      }
    });
  },
  deleteListing: (id, callback) => {
    let query = `DELETE FROM listings WHERE listingID = ${id}`;
    db.db.query(query, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        console.log('listing deleted');
        callback(null, result);
      }
    })
  }
};
