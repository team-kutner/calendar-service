const models = require('../models');

// receives get request for listing booking information and uses the models function and then sends back the results to the client

module.exports = {
  get: function (req, res) {
    let id = req.params.id;
    models.listing.getDates(id, (results) => {
      res.json(results);
      res.end();
    });
  },
  post: (req, res) => {
    let newListing = [
      req.body.name,
      req.body.description,
      req.body.guestMax,
      req.body.price,
      req.body.cleaningFee,
      req.body.serviceFee,
      req.body.rating,
      req.body.numRatings
    ];
    models.listing.createListing(newListing, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404);
        res.end();
      } else {
        res.status(200).send(result);
        res.end();
      }
    });
  },

  update: (req, res) => {
    let id = req.params.id;
    let updateColumn = req.params.column.toUpperCase();
    let newVal = req.body.value;
    models.listing.updateListing(id, newVal, updateColumn, (err, result) => {
      if (err) {
        console.log(err);
        res.status(404);
        res.end();
      } else {
        res.status(200).send(result);
        res.end();
      }
    });
  },

  delete: (req, res) => {

  }
};