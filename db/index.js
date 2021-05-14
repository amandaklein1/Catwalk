
var mysql = require('mysql');
var pass = require('../config.js')
// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: '18.116.74.237',
  user: 'amanda',
  password: pass,
  database: 'projectRunwayTest'
});



module.exports = connection;