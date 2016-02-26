app.controller('SportsController', function($scope, Models){
	
	$scope.addSport = function(){
		Models.Sport.create($scope.newSport);
		$scope.newSport = '';
	}
	
	Models.Sport.findAll();
	Models.Sport.bindAll({}, $scope, 'sports');
	
});