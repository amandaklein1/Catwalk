var models = require('../models');


module.exports = {
  get: function (req, res) {

    models.productListModel.getAll((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  }
};