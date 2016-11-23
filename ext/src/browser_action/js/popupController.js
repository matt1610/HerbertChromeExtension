app.controller("popupController", function($scope){

	
	$scope.SliderChange = function(){
		$scope.min = 0;
		$scope.max = 2;

			if($scope.rangeVal == $scope.min){
				console.log('minimum filter');
				} else if ($scope.rangeVal == $scope.max){
					console.log('maximum filter');
						} else {
							console.log('medium filter');
							}
			}
			//console.log($scope.rangeVal);
	
	
})