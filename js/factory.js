angular.module('GamesService', [])
	.factory('GamesFactory', function($http) {
		var getGames = function(gameTitle) {
			console.log("From Factory we recived => " + gameTitle)
			return $http.post('http://localhost:9000/getInfo', {"gameTitle":gameTitle} )
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
		var getInfo = function(gameId){
			console.log( gameId)
			return $http.post('http://localhost:9000/getMoreInfo', {"gameId":gameId} )
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
		return {
			getGames: getGames,
			getInfo: getInfo
		}
	})
