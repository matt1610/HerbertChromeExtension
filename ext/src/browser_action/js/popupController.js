app.controller("popupController", function($scope){
	
	$scope.SliderChange = function(){
		$scope.message = "";

		switch ($scope.rangeVal) {
	        case "0":
	            $scope.message = "minimum filter";
	            break;
	        case "1":
	            $scope.message = "maximum filter";
	            break;
	        case "2":
	            $scope.message = "medium filter";
	            break;
	        default:
	    }
	}

	$scope.SliderChange();	
	
})