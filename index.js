const express = require('express')
const PORT = 3005 
const app = express()

const disc = require('./routes/discipline')
const lab = require('./routes/laboratory')
const qwe = require('./routes/questions')
const pdf = require('./routes/docs')
const test = require('./routes/test')
const models = require('./models')
const Sequelize = require("sequelize");
global.__basedir = __dirname


const sequelize = new Sequelize("sibsutisdb", "postgres", "132", {
  dialect: "postgres",
  host: 'localhost'
});
  
models.sequelize.sync()

app.use(express.json());
app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        res.header("Access-Control-Allow-Headers", "*");
        next();
})
app.use(express.json({limit: '25mb'}));

app.use(express.static("./uploads"))
app.use('/users/', disc)
app.use('/lab/', lab)
app.use('/lab/quest', qwe)
app.use('/upload', pdf)
app.use('/uploadtest', test)

app.listen(PORT, async () =>{
    console.log('Kirov reported!!!')
    sequelize.authenticate()

})



module.exports = app




