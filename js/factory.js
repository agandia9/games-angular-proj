angular.module('GamesService', [])
	.factory('GamesFactory', function($http) {
		var getGames = function() {
			console.log("HEY! welcome to factory")
			return $http.get('http://localhost:9000/getInfo')
			.success(function(response) {
				console.log("data received! - factory")
			});
		}
		return {
				getGames: getGames
			}
	})
