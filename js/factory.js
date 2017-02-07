angular.module('GamesService', [])
	.factory('GamesFactory', function($http) {
		var apiCall = function() {
			console.log("HEY! welcome to factory")
			$http.get('http://localhost:9000/getInfo')
			.success(function(response) {
				console.log(response)
			});
		}
		return {
				getGames: apiCall
			}
	})
