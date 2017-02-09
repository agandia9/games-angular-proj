var connect = require('connect')
var http = require('http');
var express = require('express');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var format = "jsonp";
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
app.use(cors())

//Options required for request to API 
function options(query) {
	var opt = {
	query: query,
	url: 'http://api.giantbomb.com/search/?api_key=' + api_key + '&format=json&query=' + query +"&resources=game",
	headers: {
		'User-Agent': 'request'
	}
}
	return opt;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/getInfo',function(req,res){
    var gameTitle = req.body.gameTitle;
    console.log(gameTitle)
    // endpoint api 

	request(options(gameTitle), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})


// endpoint api 
app.get('/getInfo', function (req, res) {
	var query = req.body.gameTitle;
	request(options(query), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})

//listen on....
app.listen(9000)
