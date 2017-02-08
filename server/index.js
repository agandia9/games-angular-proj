var http = require('http');
var express = require('express');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var query = "kingdom";
var format = "jsonp";
var cors = require('cors')
var app = express()
app.use(cors())

//listen on....
app.listen(9000)
// when localhost:9000/getInfo....
app.get('/getInfo', function (req, res) {
	var getInfoGames = request(options, callback)
	res.json(getInfoGames)
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
	var response = JSON.parse(body);
	console.log("Receive data and parse ok")
	return response
}
