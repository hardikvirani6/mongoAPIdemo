import imgModel from '../models/imgModel';
import path from 'path';

function download(req,res) {
    res.sendFile(path.join(__dirname, '../', req.query.url));
};

function uploadFile(req,res) {
    let data = {
        imgName: req.body.file,
        imgPath: req.body.path + req.body.file
    };
    console.log('data:', data)

    let image = new imgModel(data);
    image.save()
        .then((img) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
}

function fetchAll(req, res) {
  imgModel.find({})
      .then((images) => {
        let imageUrl = [];
        images.forEach(function (image) {
            imageUrl.push('localhost:8080/api/shopping/img?url='+image.imgPath);
        });
        res.send(imageUrl);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
};

export default { download, uploadFile, fetchAll };