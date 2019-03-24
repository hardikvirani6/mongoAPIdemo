var express     =   require('express');
var router      =   express.Router();
var control     =   require('../controller/categoryController');

router.route('/')
    .get(control.select)
    .post(control.create)
    .delete(control.remove)
    .put(control.update);

module.exports=router;