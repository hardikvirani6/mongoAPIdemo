var express    =    require('express');
var router     =    express.Router();

var categoryController    = require('./category.route');
var productController     = require('./product.route');
var employeeController    = require('./employee.route');

router.use('/category',categoryController);
router.use('/product',productController);
router.use('/emp',employeeController);

module.exports=router;