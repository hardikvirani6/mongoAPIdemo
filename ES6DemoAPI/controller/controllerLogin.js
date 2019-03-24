var Product = require('../models/modelLogin');
var express = require('express');

function select(req,res) {
    Product.find(function (err,product) {
        if(err)
            res.send(err);
        res.json(product);
    });
};

function verify(req,res) {
    Product.findOne({name: req.body.name, password: req.body.password,}, function (err, user) {
        if (err)
            res.json(err);
        if(!user)
            res.json({message:1})
        else
            res.json({message:0});
    });
};

function create(req,res,next) {
    Product.create({
        name:req.body.name,
        password:req.body.password,
    })
    .then((saveUser) => {
        return res.json(saveUser);
    }, (e)  =>  next(e));
};

function update(req,res,next) {
    Product.findById({_id: req.body._id}, (err, product) => {
        if(err)
            res.send(err);
        Object.assign(product, req.body).save((err) => {
            if(err)
                res.send(err);
            res.json({message:'Updated Successfully'});
        });
    });
};

function remove(req,res) {
    Product.remove({_id:req.body._id}, (err) => {
        if(err)
            res.send(err);
        res.json({message:'Remove Successfully'});
    });
};

export default {select, create, verify, update, remove,};