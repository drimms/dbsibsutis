const express = require('express')
const models = require('../models')
const router = express.Router()
const {loader} = require('./quiz/controller')

router.get('/', async (req, res) => {
    models.Questions.findAll().then(
      p => {
        if (p && Object.keys(p).length > 0) {
          res.json({sucess: true, data: p})
        }
        else 
          res.status(400).json({ success: false, message: "Отсутствуют тесты" });
        }
    )
  })

router.post('/', (req, res) => {
    let {body, course, lab} = req.body;
    let data = (body).join('\n');
    let strr = data.split('\n').length;
    let countQuestion = 0; //определяется количество вопросов
    for (i=0; i<strr; i++) {
      currentstr = data.split('\n')[i]; //строка для поиска      
      if (!currentstr.indexOf('тест') || !currentstr.indexOf('вопрос')) {
        countQuestion=countQuestion+1; 
      }
    };
    loader(data, strr, course, lab)
});


router.delete('/:id', (req, res) => {
	let id = req.params.id;
    
	models.Questions
		.destroy({ where: { id } })
		.then((rowDeleted) => res.json({ success: true, deleted: rowDeleted }))
		.catch((err) => res.status(500).json({ success: false, errors: { globals: err } }));
});

module.exports = router