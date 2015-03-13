angular.module('eNetMobile')
	.controller('mobiDays',  ['$scope', function($scope) { // create controller for the module

   $scope.showTheScroller = function() {
        $scope.integer.show();
    };
}]);