var app = angular.module('gameApp')

app.controller('MainController', function($scope) {
	$scope.title = "GameStuff 👾"
});

app.controller('DataController', function($scope, GamesFactory) {

	$scope.games = function() {
				GamesFactory.getGames()
					// .then(function(response) {
					// 	$scope.gamesInfo = response.data;
					// 	console.log($scope.gamesInfo)
					// }).catch(function(response) {
					// 	console.log(response);
					// });
				}

});

