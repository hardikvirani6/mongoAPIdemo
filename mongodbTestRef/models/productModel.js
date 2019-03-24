var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema          = mongoose.Schema;
var ObjectId        = Schema.ObjectId;
var ProductSchema   = new Schema({
    cname:{type: ObjectId, ref: 'Category'},
    name:{type: String, required: true},
    price:{type: Number, required: true},
    date:{type: Date, required: true}
});

ProductSchema.pre('find',populateReferences);

function populateReferences() {
    return this.populate('cname', 'name');
}

module.exports = mongoose.model('Product', ProductSchema);
