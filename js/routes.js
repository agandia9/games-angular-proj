angular.module('gameApp')
.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider
			.when("/games", {
				templateUrl: 'templates/gamesFound.html',
			})
			.when("/error", {
				templateUrl: 'templates/error.html',
			})
			.when("/relacionatedGames", {
				templateUrl: 'templates/relacionated_games.html',
			})
			.otherwise({ redirectTo: '/' })
	}]);