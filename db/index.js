
var mysql = require('mysql');
var pass = require('../config.js')
// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: pass,
  database: 'projectRunway'
});





module.exports = connection;