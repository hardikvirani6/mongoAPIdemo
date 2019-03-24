import mongoose from 'mongoose';

const Schema      =   mongoose.Schema;
const loginSchema   =   new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true}});

module.exports = mongoose.model('Login',loginSchema);
