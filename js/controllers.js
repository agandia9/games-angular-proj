var app = angular.module('gameApp')

app.controller('MainController', function($scope) {
	$scope.title = "GameStuff 👾"
});

app.controller('DataController', function($scope, GamesFactory) {

	$scope.games = function() {
				GamesFactory.getGames()
					.then(function(response) {
						$scope.gamesInfo = response.data;
						console.log($scope.gamesInfo)
					}).catch(function(response) {
						console.log(response);
					});
				}

});

// $("#getInfo").on("click", function(e) {
// 		e.preventDefault();
// 		var valueSearched = $("#valueSearched").val();
// 		$.ajax({
// 			url: "http://api.giantbomb.com/search/",
// 			type: "get",
// 			data: {
// 				api_key: "be78ab7bb822bf90173073ba3336431b403e1ce5",
// 				query: valueSearched,
// 				format: "jsonp",
// 				json_callback: "gamer",
// 				resources: "game"
// 			},
// 			dataType: "jsonp"
// 		});
// 	});
// 	function gamer(data) {
// 		console.log(data)
// 		var listGames = data.results;
// 		var tplOption = "<li class='gamesLi'><a><%GAME-NAME%></a>	<button type='button' class='btn btn-primary' value=ID >Click for info</button>	</li>"
// 		var optionsGames = listGames
// 					.filter(game => game.resource_type == 'game' )
// 					.map( game => tplOption.replace('<%GAME-NAME%>', game.name).replace('ID', game.api_detail_url) )
// 		$("#listGames").html(optionsGames.join(''))
// 	}


