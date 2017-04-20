var Yelp = require('yelp');
var keys = require('./../config.js');

var dataController = {
	getData: getData
};


var yelp = new Yelp({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  token: keys.token,
  token_secret: keys.token_secret
});


function getData(req, res) {
	var yelpData = [];
    // See http://www.yelp.com/developers/documentation/v2/search_api

  yelp.search({term: "Restaurant",limit: 20, offset: 20, sort:2, location: "Los Angeles, CA", radius_filter: 20000}, function(error, data) {
  	console.log('testing')
    if(error) console.log(error);

    data.businesses.forEach(function(item){
      var obj = {};
      obj.name = item.name;
      obj.rating = item.rating;
      obj.review_count = item.review_count;
      obj.lat = item.location.coordinate.latitude;
      obj.long = item.location.coordinate.longitude;
      obj.address = item.location.address;
      obj.city = item.location.city;
      obj.state = item.location.state_code;
      obj.postal_code = item.location.postal_code;
      yelpData.push(obj);
      // console.log(JSON.stringify(obj));
    });
    // console.log('wtf')
    res.send(yelpData);

    // setTimeout(function(){next();}, 4000);
	});
}

module.exports = dataController;