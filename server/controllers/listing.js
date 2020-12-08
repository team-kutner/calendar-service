const models = require('../models');

// receives get request for listing booking information and uses the models function and then sends back the results to the client

module.exports = {
  get: function (req, res) {
    let id = req.params.id;
    return models.listing.getDates(id)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400)
        res.end();
      })
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
    return models.listing.createListing(newListing)
      .then(result => {
        res.status(200).send(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(404);
        res.end();
      })
  },

  update: (req, res) => {
    let id = req.params.id;
    let updateColumn = req.params.column.toUpperCase();
    let newVal = req.body.value;
    return models.listing.updateListing(id, newVal, updateColumn)
      .then(result => {
        res.status(200).send(result);
        res.end();
      })
      .catch(err => {
        console.log(err);
        res.status(404);
        res.end();
      })
  },

  delete: (req, res) => {
    let id = req.params.id;
    return models.listing.deleteListing(id)
    .then(result => {
      res.status(200).send(result);
      res.end();
    })
    .catch(err => {
        console.log(err);
        res.status(404);
        res.end();
      })
    }
};