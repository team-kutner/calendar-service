const models = require('../models');

// receives get request for listing booking information and uses the models function and then sends back the results to the client

module.exports = {
  get: function (req, res) {
    let id = req.params.id;
    models.listing.getDates(id, (results) => {
      res.json(results);
      res.end();
    });
  }
};