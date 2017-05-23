angular.module('GamesService', [])
.factory('GamesFactory', function($http, $location) {
	var getGames = function(gameTitle) {
		return $http.post('http://localhost:9000/getInfo', {"gameTitle":gameTitle} )
				.then(function(data){return data},function() {
					$scope.errormsg = 'connection refused'
					$location.path('/error');
				})
			}
	var getInfo = function(gameId){
				return $http.post('http://localhost:9000/getMoreInfo', {"gameId":gameId} )
				.then(function(data){return data},function() {
					$scope.errormsg = 'connection refused'
					$location.path('/error');
				})
			}
	var getRelacionatedGames = function(url_games){
		return $http.post('http://localhost:9000/getRelacionatedGames', {"url_games":url_games} )
				.then(function(data){return data},function() {
					$scope.errormsg = 'connection refused'
					$location.path('/error');
				})
	}
	var getIcon = function(infoAboutGames){
				console.log(infoAboutGames)
				if(infoAboutGames === 'Driving/Racing'){
					return `🏎 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Puzzle'){
					return `⛏ ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Adventure'){
					return `🏇🏼🎒 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Platformer'){
					return `🏃🏽 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Action'){
					return `🏹 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Shooter'){
					return `🔫 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Role-Playing'){
					return `🗡 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Fighting'){
					return `👊🏼 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Vehicular Combat'){
					return `🏎💣 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Action-Adventure'){
					return `💥💣 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Strategy'){
					return `🤔 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Real-Time Strategy'){
					return `🤔⏳ ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Simulation'){
					return `👥 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Flight Simulator'){
					return `✈️ ${infoAboutGames}`
				}
				else if(infoAboutGames === 'MOBA'){
					return `🌍 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Card Game'){
					return `♠️♣️♥️♦️ ${infoAboutGames}`
				}
				else if(infoAboutGames === 'MMORPG'){
					return `🌍🗡 ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Compilation'){
					return `🗄➕ ${infoAboutGames}`
				}
				else if(infoAboutGames === 'Music/Rhythm'){
					return `🎵🎤 ${infoAboutGames}`
				}
				else {
					return `⁉️  ${infoAboutGames}`
				}
			}
			return {
				getRelacionatedGames: getRelacionatedGames,
				getIcon: getIcon,
				getGames: getGames,
				getInfo: getInfo
			}
		})
