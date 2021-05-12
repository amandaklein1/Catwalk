var db = require('../db');

module.exports = {
  getAll: function (params, callback) {


    var queryStr = `select
    products.id, products.name, products.slogan, products.description, products.category, products.default_price,
    json_arrayagg(json_object("feature", features.feature, "value", features.value)) as features
    from products join features on (products.id = features.productId)
    where products.id = (?)
    group by products.id`;

    db.query(queryStr, params, (err, results) => {

     var product = results.map((object) => {
       return {
         'id': object.id,
         'name': object.name,
         'slogan': object.slogan,
         'description': object.description,
         'category': object.category,
         'default_price': object.default_price,
         'features': JSON.parse(object.features)
       }
      })

      callback(err, product)
    });
  }
}

//