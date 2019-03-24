import mongoose from 'mongoose';

let imgSchema = mongoose.Schema({
    imgName: {type: String, required: true},
    imgPath: {type: String, required: true}
});

module.exports = mongoose.model('image', imgSchema);
