import disc from './models/disc.js'
const express = require('express')
const PORT = 3000
const app = express()

const Sequelize = require("sequelize");
const sequelize = new Sequelize("sibsutisdb", "postgres", "132", {
  dialect: "postgres",
  host: 'localhost'
});

db.sequelize.sync().then(() => {
    console.log('ok')
})

sequelize.authenticate()
    .then(() => {
        sequelize.sync({force: false})
        console.log('Модели были синхроинизрованы, вроде бы')
    })
    .catch((err) => console.log('Ошибочка брат:', err))



app.get('Hello', (req, res) => {
    res.send('hhhh')
})
app.listen(PORT, () =>{
    console.log('Kirov reported!!!')
})

module.exports = app




