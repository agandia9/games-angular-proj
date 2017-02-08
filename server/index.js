var http = require('http');
var express = require('express');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var query = "kingdom";
var format = "jsonp";
var cors = require('cors')
var app = express()
app.use(cors())

//Options required for request to API 
var options = {
	url: 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game",
	headers: {
		'User-Agent': 'request'
	}
}

// endpoint api 
app.get('/getInfo', function (req, res) {

	request(options, function(_, _, body) {
		res.json( JSON.parse(body) )
	})

})

//listen on....
app.listen(9000)
