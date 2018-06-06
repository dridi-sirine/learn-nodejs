var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express();

app.use(morgan('combined')).use(express.static(__dirname + '/public')).use(favicon(__dirname + '/public/favicon.ico')).use(function(req, res){ res.send('Hello');});

app.listen(2500);
