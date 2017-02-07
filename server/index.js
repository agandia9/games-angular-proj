var http = require('http');
var express = require('express');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var query = "kingdom";
var format = "jsonp";
var app = express()
//listen on....
app.listen(9000)
// when localhost:9000/getInfo....
app.get('/getInfo', function (req, res) {
  var infoToSend = request(options, callback);
  console.log(infoToSend)
  return infoToSend
})
//Options for query to api
var options = {
	url: 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game",
	headers: {
		'User-Agent': 'request'
	}
}

// callback function that receive data and parse it...
function callback(error, response, body) {
	var info = JSON.parse(body);
	console.log(info);
	console.log("Receive data and parse ok")
	return info
}




// var request = require('request');

// var options = {
//   url: 'https://api.github.com/repos/request/request',
//   headers: {
//     'User-Agent': 'request'
//   }
// };

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     console.log(info.stargazers_count + " Stars");
//     console.log(info.forks_count + " Forks");
//   }
// }

// request(options, callback);
