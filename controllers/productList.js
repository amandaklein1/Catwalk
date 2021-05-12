var models = require('../models');


module.exports = {
  get: function (req, res) {
    console.log('this is my productList: ', req.query.product_id)
    models.productListModel.getAll((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  }
};