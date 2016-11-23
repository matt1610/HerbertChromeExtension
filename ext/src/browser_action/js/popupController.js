app.controller("popupController", function($scope){
	
	$scope.SliderChange = function(){
		$scope.min = 0;
		$scope.max = 2;

		$scope.message = "";

			if($scope.rangeVal == $scope.min){
				$scope.message = 'minimum filter';
				} else if ($scope.rangeVal == $scope.max){
					$scope.message = 'maximum filter';
						} else {
							$scope.message = 'medium filter';
							}
			}

	$scope.SliderChange();	
	
})