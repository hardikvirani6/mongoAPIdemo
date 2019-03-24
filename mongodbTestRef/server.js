var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var express    = require('express');        // call express
var cors       = require('cors');
var router     = require('./routes/index');

var port       = process.env.PORT || 8080;        // set our port
var app        = express();                 // define our app using express

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port);

mongoose.connect("mongodb://localhost:27017/mongodbTestRef");
console.log('Magic happens on port ' + port);
