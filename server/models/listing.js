const models = require('../models');
const db = require('../database/config.js');
const moment = require('moment');

module.exports = {
  getDates: function(id, callback) {
    // query the database to grab the dates and availability status
    let query = 'SELECT checkIn, checkOut FROM reservations WHERE listingID = ?';
    db.db.query(query, id, (err, result) => {
      if (err) { console.log(err); } else {
        // for each reservation, extrapolate the dates out so there is a massive array of all unavailable dates
        //result is an array of objects with checkIn and checkOut

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
  }
};
