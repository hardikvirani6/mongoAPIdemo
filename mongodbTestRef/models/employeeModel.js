var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema          = mongoose.Schema;
var ObjectId        = Schema.ObjectId;
var EmployeeSchema  = new Schema({
    pname:{type: ObjectId, ref: 'Product'},
    name:{type: String, required: true},
    designation:{type: String, required: true},
    salary:{type: Number, required: true}
});

EmployeeSchema.pre('find',populateReferences);

function populateReferences() {
    return this.populate('pname','name');
}

module.exports = mongoose.model('Employee', EmployeeSchema);
