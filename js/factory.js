angular.module('GamesService', [])
.factory('GamesFactory', function($http) {
		//var apiKey = 'be78ab7bb822bf90173073ba3336431b403e1ce5'
		// https://docs.angularjs.org/api/ng/service/$http#usage
		function getGames() {
			console.log("HEY! welcome to factory")

			return $http.jsonp("http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK")
				.success(function(data){
				console.log(data.found);
			});
			// return $http(
		// {
		// 	method: "GET",
		// 	url: "http://api.giantbomb.com/search/",
		// 	dataType: "jsonp",
		// 	params: {
		// 		api_key: "be78ab7bb822bf90173073ba3336431b403e1ce5",
		// 		query: "kingdom",
		// 		format: "jsonp",
		// 		json_callback: "getGames",
		// 		resources: "game"
		// 	}
		// })

			
		}
		return {
				getGames: getGames
			}
	})