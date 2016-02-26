app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	
	var base = "app/components/";
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: base + 'home/home.html',
			controller: 'HomeController'
		})
		.state('sports', {
			url: '/sports', 
			templateUrl: base+'sports/sports.html',
			controller: 'SportsController'
		})
		.state('sport', {
			url: '/sports/:sportName',
			templateUrl: base+'sport/sport.html',
			controller: 'SportController',
			resolve: {
				sport: function(){
					//HEY GO GET THE sport FOR THIS name
					//IF NO sport AT THIS name 
					//GO BACK TO /sports 
					//TODO:FEATURE: ask there is no .... would you like to create it?
				}
			}
		})
		.state('rooms', {
			abstract: true,
			url: '/sports/:sportName/room/:roomId',
			template: '<ui-view></ui-view>',
			resolve: {
				room: function(){
					debugger;
					//HEY GO GET THE room FOR THIS sport
					//IF NO room AT THIS name 
					//GO BACK TO /sport
				}
			}
		})
		.state('rooms.room', {
			url: '',
			templateUrl: base+'room/room.html',
			controller: 'RoomController'
		})
})