const { Pool } = require('pg');
const config = require('./pgConfig.js');

const pool = new Pool(config);

module.exports = pool;

