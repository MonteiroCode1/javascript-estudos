const knex = require('knex');
const config = require('../knexfile.js');
const dbknex = knex(config.development);
module.exports = dbknex;