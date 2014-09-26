'use strict'

var path = require('path');

var all = {
  secrets: {
    token: 'Human-Beans'
  },
  dbConnectionString: {
    host: 'us-cdbr-azure-west-a.cloudapp.net',
    user: 'b017f8a5a6d3e8',
    password: '46c0073d',
    database: 'ClickagoosDB'
  },

  dbConnectionStringLocal: {
    host: 'localhost',
    user: 'root',
    password: 'HumanBeans',
    database: 'ClickagoosDB'
  },

  root: path.normalize(__dirname + '/../../..')
}

module.exports = all;