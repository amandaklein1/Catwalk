var db = require('../db');

module.exports = {
  getAll: function (params, callback) {

    var queryStr = 'select relatedProducts.related_productId from relatedProducts where relatedProducts.current_productId = (?)';
    db.query(queryStr, params, (err, results) => {

      var related = results.map((object) => {
        return object.related_productId
      })
      callback(err, related);
    });
  }
}