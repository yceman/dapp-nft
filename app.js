const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const path = require ('path')
const app = express()
const port = 3000
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.send('Contate-nos!')
})


app.listen(port,(err)=> {
    if (err) {
        console.log('Aconteceu um erro', err)
    } else {
        console.log(`App listening on port ${port}...`)
    }
})
