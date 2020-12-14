const models = require('../models');

module.exports = {
  // receives get request from client and uses model function to grab booking info from the DB and sends back to the client
  get: (req, res) => {
    let id = req.params.id;
    return models.reservation.getBookingInfo(id)
      .then(result => {
        res.json(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(400);
        res.end();
      })

  },
  // receives post request from client after confirming a booking and uses model function to post new data into the reservations table
  post: function (req, res) {
    let key = req.body;
    var params = [key.listingID, key.checkIn, key.checkOut, key.adults, key.children, key.infants, key.totalPrice];

    return models.reservation.addBookingInfo(params)
      .then(result => {
        res.status(200).send(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(400);
        res.end();
      })

  },

  update: (req, res) => {
    let id = req.params.id;
    let updateColumn = req.params.column.toUpperCase();
    let newVal = req.body.value;
    return models.reservation.updateReservation(id, newVal, updateColumn)
      .then(result => {
        res.status(200).send(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(400);
        res.end();
      })
  },

  delete: (req, res) => {
    let id = req.params.id;
    return models.reservation.deleteReservation(id)
      .then(result => {
        res.status(200).send(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(400);
        res.end();
      })
  }
};