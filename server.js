//var winston = require('winston');

var express = require('express');
var app = express();

app.use(express.bodyParser());

app.use(express.logger('dev'));

app.use(express.static(__dirname + '/app'));

app.use(app.router);

app.listen(80);

