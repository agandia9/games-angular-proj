var app = angular.module('gameApp', [])
	.factory('GamesFactory', function($http) {
		var apiKey = 'be78ab7bb822bf90173073ba3336431b403e1ce5'
		function getGames() {
			var url = 'http://www.giantbomb.com/api/search/?api_key=<%KEY%>&format=jsonp&json_callback=callFunction&query="metroid prime"&resources=game'
			var url = url.replace('<%KEY%>', apiKey)
			return $http.get(url)
		}
		return {
			getGames: getGames
		};
	})
	.controller('MainController', function($scope) {
		$scope.title = "GameStuff 👾"
	})
	.controller('DataController', function($scope, GamesFactory) {
		GamesFactory.getGames()
			.then(function(response) {
				$scope.games = response.data.results;
				console.log($scope.games)
			}).catch(function(response){
				console.log(response);
			});
	})

