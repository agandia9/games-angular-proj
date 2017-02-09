angular.module('GamesService', [])
	.factory('GamesFactory', function($http) {
		var getGames = function(gameTitle) {
			console.log("From Factory we recived => " + gameTitle)
			return $http.post('http://localhost:9000/getInfo', {"gameTitle":gameTitle} )
				.success(function(data) {
					console.log(data)
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}
		return {
			getGames: getGames
		}
	})
