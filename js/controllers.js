var app = angular.module('gameApp')

app.controller('MainController', function($scope) {
	$scope.title = "GameStuff 👾"
});

app.controller('DataController', function($scope, GamesFactory) {
	$scope.games = function() {
				$scope.gamesInfo = GamesFactory.getGames()
					.then(function(response) {
						console.log(response.data.results)
						$scope.gamesInfo = response.data.results

					})
					.catch(function(response) {
						console.log("")
						console.log(response.data);
					});
				}

});

