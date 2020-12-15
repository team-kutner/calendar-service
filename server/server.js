require('newrelic');
const app = require('./app');
const result = require('dotenv').config();
if(result.error) {
  console.log(result.error);
}

const port = process.env.LISTENPORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

