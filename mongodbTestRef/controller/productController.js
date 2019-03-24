var Product    = require('../models/productModel');

//get all product data
exports.select=function (req, res) {
    Product.find(function(err, product) {
        if (err)
            res.send(err);
        res.json(product);
    });
}

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
exports.remove=function (req,res) {
    Product.remove({_id:req.body._id},function (err) {
        if(err)
            res.send(err);
        res.json({messgae : "Successfully Product Deleted" });
    });
}


// create a product (accessed at POST http://localhost:8081/api/product)
exports.create=function (req, res) {
    var product = new Product();
    product.cname = req.body.cname;
    product.name = req.body.name;
    product.price=req.body.price;
    product.date=req.body.date;
    // set the bears name (comes from the request)
    // save the bear and check for errors
    product.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Product created!'});
    });
}

// update the bear with this id (accessed at PUT http://localhost:8081/api/bears/:bear_id)
exports.update = function (req, res) {
    // use our bear model to find the bear we want
    Product.findById({_id: req.body._id}, function (err, product) {
        if (err)
            res.send(err);
        product.name = req.body.name || product.name;  // update the product info
        product.date = req.body.date || product.date;  // update the product info
        product.price = req.body.price || product.price;  // update the product info
        // save the product
        product.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Product updated!'});
        });
    });
}