const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const compression = require('compression');
// const db = require('./database/config.js');
const router = require('./routes.js');
const path = require('path');



app.use(compression());
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.get('/listing/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;