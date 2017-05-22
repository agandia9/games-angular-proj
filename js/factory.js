angular.module('GamesService', [])
.factory('GamesFactory', function($http, $location) {
	var getGames = function(gameTitle) {
		console.log("From Factory we recived => " + gameTitle)
		return $http.post('http://localhost:9000/getInfo', {"gameTitle":gameTitle} )
				//now works because angular version...
				// .error(function(data) {
				// 	console.log('Error: ' + data);
				// });

				.then(function(data){return data},function() {
					$location.path('/error');
				})
			}
			var getInfo = function(gameId){
				console.log( gameId)
				return $http.post('http://localhost:9000/getMoreInfo', {"gameId":gameId} )
				// .error(function(data) {
				// 	console.log('Error: ' + data);
				// });
				.then(function(data){return data},function() {
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
				getIcon: getIcon,
				getGames: getGames,
				getInfo: getInfo
			}
		})
