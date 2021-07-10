const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../view'))

app.get('/fun', function(req, res){
    res.sendFile(path.join(__dirname, '/../view/fun.html'))
})

//export app
module.exports = app;