var Emp    = require('../models/employeeModel');
var express    = require('express');        // call express
var bodyParser = require('body-parser');
var router     = express.Router();

//get all product data
exports.select=function (req, res) {
    Emp.find(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
};


exports.selectById=function (req, res) {
    Emp.findById({_id: req.body._id}, function (err, emp) {
        if (err)
            res.send(err);
        res.json(emp);
    });
};

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
exports.remove=function (req,res) {
    Emp.remove({_id:req.body._id},function (err) {
        if(err)
            res.send(err);
        res.json({messgae : "Successfully Employee Deleted" });
    })
};

// create a product (accessed at POST http://localhost:8081/api/product)
exports.create=function (req, res) {
    var emp = new Emp();      // create a new instance of the Product model
    emp.pname=req.body.pname;
    emp.name = req.body.name;
    emp.designation=req.body.designation;
    emp.salary=req.body.salary;

    // set the bears name (comes from the request)
    // save the bear and check for errors
    emp.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Employee created!' });
    });
};

// update the bear with this id (accessed at PUT http://localhost:8081/api/bears/:bear_id)
exports.update = function (req, res) {
    Emp.findById({_id: req.body._id}, function (err, emp) {
        if (err)
            res.send(err);
        emp.name = req.body.name || emp.name;  // update the product info
        emp.designation = req.body.designation || emp.designation;  // update the product info
        emp.salary = req.body.salary || emp.salary;  // update the product info
        // save the product
        emp.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Employee updated!'});
        });
    });
};