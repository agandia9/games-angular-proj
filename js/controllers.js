var app = angular.module('gameApp')

app.controller('MainController', function($scope) {
	$scope.title = "GameStuff 👾"
});

app.controller('DataController', function($scope, GamesFactory) {
	
	$scope.games = function() {
				$scope.getNames = [];
				$scope.gamesInfo = GamesFactory.getGames()
					.then(function(response) {
						console.log(response.data.results)
						for (var i = 0; i < response.data.results.length; i++) {
							$scope.getNames.push(response.data.results[i].name)
							$scope.getNames.join(' - ')
						};
					})
					.catch(function(response) {
						console.log(":)")
						console.log(response.data);
					});
				}

});

