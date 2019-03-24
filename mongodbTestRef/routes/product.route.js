var express     =   require('express');        // call express
var router      =   express.Router();
var control     =   require('../controller/productController');

router.route('/')
    .get(control.select)
    .post(control.create)
    .delete(control.remove)
    .put(control.update);

module.exports=router;