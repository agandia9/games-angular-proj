var app = angular.module('gameApp')

app.controller('MainController', function($scope) {
	$scope.title = "GameStuff 👾"
});

app.controller('DataController', function($scope, GamesFactory) {
	$scope.games = function(gameTitle) {
				console.log("from controller.. we search by => " + $scope.gameTitle)
				$scope.gamesInfo = GamesFactory.getGames($scope.gameTitle)
					.then(function(response) {
						console.log(response.data.results)
						$scope.gamesInfo = response.data.results
					})
					.catch(function(response) {
						console.log(response.data);
					});
				}
	$scope.gameMoreInfo = function(gameId){
		$scope.gameId = gameId
		console.log($scope.gameId)
		$scope.infoAboutGames = GamesFactory.getInfo($scope.gameId)
		.then(function(response) {
			console.log(response.data.results)
			$scope.infoAboutGames = response.data.results
		});
	}

});

