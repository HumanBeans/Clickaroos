'use strict'

var path = require('path');

var all = {
  secrets: {
    token: 'Human-Beans'
  },
  dbConnectionString: {
    host: 'clickaroosdb.cloudapp.net',
    user: 'Clickaroos',
    password: 'HumanBeans',
    database: 'clickagoosdb',
    charset: 'utf8'
  },

  dbConnectionStringLocal: {
    host: 'localhost',
    user: 'root',
    password: 'HumanBeans',
    database: 'ClickagoosDB'
  },

  root: path.normalize(__dirname + '/../../..')
};

module.exports = all;