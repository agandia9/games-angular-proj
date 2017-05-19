var app = angular.module('gameApp')
app.controller('DataController', function($scope, GamesFactory, $location) {
	$scope.games = function(gameTitle) {
		console.log("from controller.. we search by => " + $scope.gameTitle)
		$scope.gamesInfo = GamesFactory.getGames($scope.gameTitle)
		.then(function(response) {
			$location.url("/games")
			console.log(response.data.results)
			$scope.gamesInfo = response.data.results
			$scope.myStyle={display:'inline'}
		})
		.catch(function(response) {
			console.log(response.data);
			$location.url("/error")
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

			for(prop in $scope.infoAboutGames){
				if (prop === 'genres') {
					for (var i = 0; i < $scope.infoAboutGames[prop].length; i++) {
						console.log(`call ${i} times`)
						$scope.infoAboutGames[prop][i].name = GamesFactory.getIcon($scope.infoAboutGames[prop][i].name)
					};
					
				}
			}
		})
	}

	$scope.addToFavorite = function(name){
		$scope.nameToAdd = name
		console.log('This game for favorite...' + $scope.nameToAdd)
	}
});

