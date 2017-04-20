var app = angular.module('gameApp')

app.controller('DataController', function($scope, GamesFactory) {
	$scope.games = function(gameTitle) {

				console.log("from controller.. we search by => " + $scope.gameTitle)
				$scope.gamesInfo = GamesFactory.getGames($scope.gameTitle)
					.then(function(response) {
						console.log(response.data.results)
						$scope.gamesInfo = response.data.results
						$scope.myStyle={display:'inline'}
					})
					.catch(function(response) {
						console.log(response.data);
					});
					
					$scope.mySecStyle={transform: 'rotate(360deg)', transition: 'width 2s, height 2s, transform 2s'}
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

