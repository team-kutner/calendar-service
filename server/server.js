const app = require('./app');
const port = 5000;
const result = require('dotenv').config();
if(result.error) {
  console.log(result.error);
}


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});