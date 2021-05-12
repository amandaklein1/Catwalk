var models = require('../models');


module.exports = {
  get: function (req, res) {
    var id = [req.params.product_id]

    models.relatedListModel.getAll(id, (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  }
};