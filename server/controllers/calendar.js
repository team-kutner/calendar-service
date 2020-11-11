const models = require('../models');

// receives get request for calendar booking information and uses the models function and then sends back the results to the client

module.exports = {
  get: function (req, res) {
    console.log('here');
    models.calendar.getDates((results) => {
      res.json(results);
      res.end();
    });
  }
};