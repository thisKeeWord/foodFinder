// var Yelp = require('yelp');
var Yelp = require('yelp-api-v3');
var keys = require('./../config.js');

var dataController = {
	getData: getData
};


var yelp = new Yelp({
  // consumer_key: keys.consumer_key,
  // consumer_secret: keys.consumer_secret,
  // token: keys.token,
  // token_secret: keys.token_secret
  app_id: keys.leo_client_id,
  app_secret: keys.leo_client_secret
});


function getData(req, res) {
	var yelpData = [];
    // See http://www.yelp.com/developers/documentation/v2/search_api
    var userQuery = req.body.userSearch
  console.log(userQuery, "asdfasdfasdfasdfasdf");

  yelp.search({term: userQuery, categories: "italian", location: "Los Angeles, CA", radius_filter: 20000}, function(error, data) {
  	// console.log('testing')
    if(error) console.log(error);
    // console.log(JSON.parse(data).businesses);
    var parsedData = JSON.parse(data).businesses;
    parsedData.forEach(function(item){
    	// console.log(item, "eye-D")
      var obj = {};
      obj.name = item.name;
      obj.url = item.url;
      obj.is_closed = item.is_closed;
      obj.address = item.location.address1 + ", " + item.location.city + ", " + item.location.state + ", " + item.location.zip_code;
      obj.phone = item.phone;
      // obj.city = item.location.city;
      // obj.state = item.location.state;
      // obj.zip_code = item.location.zip_code;
      obj.categories = item.categories[0].title;
      obj.rating = item.rating;
      obj.review_count = item.review_count;
      // obj.lat = item.location.coordinate.latitude;
      // obj.long = item.location.coordinate.longitude;

      yelpData.push(obj);
      // console.log(JSON.stringify(obj));
    });
    // console.log('wtf')
    res.send(yelpData);

    // setTimeout(function(){next();}, 4000);
	});
}

module.exports = dataController;