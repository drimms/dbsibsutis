const express = require('express')
const models = require('../models')
const router = express.Router()
var multer = require("multer");
var path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({storage: storage});
const pathupload = path.join(__dirname, "uploads")

router.post("/", upload.single("file"), async (req, res) => {
  try {
    console.log('----------------ЗАГРУЗКА ФАЙЛОВ----------------')
    const path = req.file.path;
    const idcourselab = req.body.id 

    const entry = await models.UploadPDF.create({
      name: req.file.filename,
      path: pathupload,
      idlabs: idcourselab,
      fileDocumento: path,  
    });
    res.json(entry);
  }  
  catch (ex) {
    res.status(400).send({ error: ex });
  }
});

router.get('/', async (req, res) => {
  models.UploadPDF.findAll().then(
    p => {
      if (p && Object.keys(p).length > 0) {
        console.log('ЗАПРОС ЗАГРУЖЕННЫХ ФАЙЛОВ')
        res.json({sucess: true, data: p})
      }
      else 
        res.status(400).json({ success: false, message: "Отсутствуют PDF документы" });
      }
  )
})

router.delete('/:id', (req, res) => {
	let id = req.params.id;
  console.log(id, 'УДАЛЕНИЕ ФАЙЛА')
	models.UploadPDF
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router;