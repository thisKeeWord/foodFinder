var express = require('express');
var app = express();
var path = require('path');
var dataController = require('./dataController');
// var foursquareController = require('./foursquareController');
// var yelpController = require('./yelpController');


app.use(express.static(path.join(__dirname, './../client')));

app.get('/data', dataController.getData);
// app.get('foursquare', foursquareController.getData);
app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(3000);

module.exports = app;
