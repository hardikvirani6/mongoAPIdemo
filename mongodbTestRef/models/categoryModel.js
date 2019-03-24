var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema        = mongoose.Schema;
var CategorySchema= new Schema({
    name:{type: String, required: true},
    price:{type: Number, required: true},
    date:{type: Date, required: true}
});
module.exports = mongoose.model('Category', CategorySchema);