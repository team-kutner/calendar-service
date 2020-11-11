const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const db = require('./database/config.js');
const router = require('./routes.js');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});