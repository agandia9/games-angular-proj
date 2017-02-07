angular.module('GamesService', [])
	.config(function($httpProvider){
	    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	})
	.factory('GamesFactory', function($http) {
		var apiCall = ":("
		return {
				getGames: apiCall
			}
	})


	// function() {
	// 		console.log("HEY! welcome to factory")
	// 		return $http({
	// 			api_key: "be78ab7bb822bf90173073ba3336431b403e1ce5",
 //    			url: 'http://api.giantbomb.com/search/', 
 //    			method: "GET",
 //    			params: {
 //    				api_key: "be78ab7bb822bf90173073ba3336431b403e1ce5",
	// 				query: "kingdom",
	// 				format: "jsonp",
	// 				json_callback: "getGames",
	// 				resources: "game"
	// 			}
 // 			});

	// 	}