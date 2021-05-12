var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up our routes
app.use('/products', router);

// Serve the client files
// app.use(express.static(__dirname + '../hrnyc34-fec-falcullele/my-app/src/index.tsx'));


// If run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}