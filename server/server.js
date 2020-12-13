require('newrelic');
const app = require('./app');
const result = require('dotenv').config();
const port = process.env.LISTENPORT || 3001;
if(result.error) {
  console.log(result.error);
}





app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

