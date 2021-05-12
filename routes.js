var controller = require('./controllers');
var router = require('express').Router();


router.get('/:product_id/styles', controller.styleListController.get)

router.get('/:product_id/related', controller.relatedListController.get)

router.get('/:product_id', controller.productOverviewController.get);

router.get('/', controller.productListController.get);




module.exports = router;