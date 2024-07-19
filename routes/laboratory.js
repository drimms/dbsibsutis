const express = require('express')
const models = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    models.Labs.findAll().then(
      p => {
        if (p && Object.keys(p).length > 0) {
          res.json({sucess: true, data: p})
        }
        else 
          res.status(400).json({ success: false, message: "Отсутствуют лабораторные работы" });
        }
    )
  })

router.post('/', (req, res) => {
    let {name, course} = req.body;
    models.Labs
      .build({name, course})
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(400).json({ success: false, errors: { globals: err } }));
  });

router.delete('/:id', (req, res) => {
	let id = req.params.id;
  console.log('удаление')
	models.Labs
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});
  module.exports = router