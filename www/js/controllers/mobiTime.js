angular.module('eNetMobile')
	.controller('mobiTime',  ['$scope', function($scope) { // create controller for the module

   $scope.showTheScroller = function() {
        $scope.timePicker.show();
    };  
    
}]);