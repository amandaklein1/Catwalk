var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'select * from products order by products.id limit 10';
    db.query(queryStr, (err, results) => {
      callback(err, results);
    });
  }
}