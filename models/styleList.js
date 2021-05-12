var db = require('../db');

module.exports = {
  getAll: function (params, callback) {

    var queryStr = `select
    styles.id, styles.name, styles.originalPrice, styles.salePrice, styles.defaultStyle,
    json_arrayagg(json_object( "thumbnail_url", images.thumbnail_Url, "url", images.url)) as images,
    json_objectagg(skus.id, json_object("quantity", skus.quantity, "size", skus.size)) as skus
    from styles join images on (styles.id = images.styleId)
    join skus on (styles.id = skus.styleId)
    where styles.productId = (?)
    group by styles.id`;
    db.query(queryStr, params, (err, results) => {

      var colors = results.map((object) => {
        return {
          'id': object.id,
          'name': object.name,
          'original_price': object.originalPrice,
          'sale_price': object.salePrice,
          'default?': (object.defaultStyle === 1 ? true : false),
          'photos': JSON.parse(object.images),
          'skus': JSON.parse(object.skus)
        }
       })

     var product = {
      'product_id': params[0],
      'results': colors

     }


      console.log("this is my results: ", results.defaultStyle)
      callback(err, product)
    });
  }
}