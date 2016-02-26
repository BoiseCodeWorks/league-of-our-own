app.controller('SportController', function($scope, $stateParams, Models){
	
	Models.Sport.find($stateParams.sportId).then(function(sport){
		$scope.sport = sport;
	})
	
	
	$scope.addRoom = function(){
		$scope.newRoom.sportId = $scope.sport.id;
		Models.Room.create($scope.newRoom);
		$scope.newRoom = '';
	}
	
	Models.Room.findAll({where: {sportId: $stateParams.sportId}});
	Models.Room.bindAll({where: {sportId: $stateParams.sportId}}, $scope, 'rooms');
	
	$scope.remove = function(room){
		room.DSDestroy();
	}
	
	
	
	
});