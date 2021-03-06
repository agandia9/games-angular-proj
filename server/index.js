var connect = require('connect')
var express = require('express');
var app = express()
var http = require('http');
var request = require('request');
var api_key = "be78ab7bb822bf90173073ba3336431b403e1ce5";
var format = "jsonp";
var cors = require('cors')
var bodyParser = require('body-parser')
var mongo = require('mongodb')
var db = mongo('localhost:27017/logins');

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
	console.log(opt)
	return opt;
}

//Options required for request to API 
function opt(gameId) {
	var optInfo = {
		url: gameId + '?api_key=' +api_key + '&format=json',
		headers: {
			'User-Agent': 'request'
		}
	}
	return optInfo;
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//endpoint
app.post('/getInfo',function(req,res){
    var gameTitle = req.body.gameTitle;
    // endpoint api 
    console.log(req.body)
	request(options(gameTitle), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})

//------------------------------------

//endpoint
app.post('/getMoreInfo',function(req,res){
    var gameId = req.body.gameId;
    console.log(gameId)
    // endpoint api 
	request(opt(gameId), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})

app.post('/getRelacionatedGames',function(req,res){
    var url_games = req.body.url_games;
    console.log(opt(url_games))
    // endpoint api 
	request(opt(url_games), function(_, _, body) {
		res.json( JSON.parse(body) )
	})
})


//listen on....
app.listen(9000)
