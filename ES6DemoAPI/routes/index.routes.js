import express from 'express';
import catControl from '../controller/controllerLogin';
import imgGet from '../controller/imageUploading';
const router = express.Router();

import multer from 'multer';
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        req.body.path = "uploads/";
        callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
        let file1 = file.originalname.split(".");
        let date = Date.now();
        req.body.file = file1[0] + "_" + date + "." + file1[file1.length - 1];
        callback(null, req.body.file);
    }
});

var upload = multer({storage:storage});

router.route('/login')
    .get(catControl.select)
    .post(catControl.create)
    .delete(catControl.remove)
    .put(catControl.update);

router.route('/check')
    .post(catControl.verify);



router.route('/img')
    .put(imgGet.fetchAll)
    .post(upload.any(), imgGet.uploadFile)
    .get(imgGet.download);



export default router;
