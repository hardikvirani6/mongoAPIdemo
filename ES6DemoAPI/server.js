import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routes';
import ip from 'ip';

let port    =   process.env.port || 8080;
let app     =   express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',router);
app.listen(port, ip.address());

mongoose.connect('mongodb://localhost:27017/shoppingApp');
console.log('Running on port : ',+ port);
