const models = require('../models');

module.exports = {
  // receives get request from client and uses model function to grab booking info from the DB and sends back to the client
  get: function (req, res) {
    let id = req.params.id;
    models.reservation.getBookingInfo(id, (results) => {
      res.json(results);
      res.end();
    });
  },

  // receives post request from client after confirming a booking and uses model function to post new data into the reservations table
  post: function (req, res) {
    let key = req.body;
    var params = [key.listingID, key.checkIn, key.checkOut, key.adults, key.children, key.infants, key.totalPrice];

    models.reservation.addBookingInfo(params, (status) => {
      console.log(status);
      res.sendStatus(200);
      res.end();
    });

  }
};