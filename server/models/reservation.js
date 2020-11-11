const models = require('../models');

module.exports = {
  getBookingInfo: function(callback) {
    // grabs booking info for a home
    // returns an array
    // {
    //   "price_per_night": 171.00,
    //   "cleaning_fee": 57.00,
    //   "service_fee": 32.00,
    //   "total_price": 260.00,
    // }

  },

  addBookingInfo: function(callback) {
    // posts booking info into the DB reservations table
    // {
    //   "booking_info": {
    //     "email": "user@mail.com",
    //     "check_in": "2020-10-06",
    //     "check_out": "2020-10-10",
    //     "adults": 2,
    //     "children": 1,
    //     "infants": 0,
    //   },
    //   "booking_fees": {
    //     "price_per_night": 171.00,
    //     "cleaning_fee": 57.00,
    //     "service_fee": 32.00,
    //     "total_price": 260.00,
    //   }
    // }

  }
};