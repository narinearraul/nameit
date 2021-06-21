const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../view'));

//export app
module.exports = app;