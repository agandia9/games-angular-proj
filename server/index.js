var http = require('http');
var express = require('express');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var query = "kingdom";
var format = "jsonp";
var app = express()

app.listen(9000)

app.get('/getInfo', function (req, res) {
  return request(options, callback);
})

var options = {
	url: 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game",
	headers: {
		'User-Agent': 'request'
	}
}

function callback(error, response, body) {
	console.log("jelou....?")
	var info = JSON.parse(body);
	console.log(info);
	console.log("FUCK U")
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
