var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var dataController = require('./dataController');
// var foursquareController = require('./foursquareController');
// var yelpController = require('./yelpController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './../client')));
app.use('/node_modules', express.static(path.join(__dirname, './../node_modules/')));


app.get('/', function(req, res) {
  res.render('index.html');
});

app.post('/data', dataController.getData);
// app.get('foursquare', foursquareController.getData);


app.listen(3000);

module.exports = app;
