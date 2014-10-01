'use strict'

var connection = require('./main').dbConnectionString;

var knex = require('knex')({
  client: 'mysql',
  connection: connection
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;

