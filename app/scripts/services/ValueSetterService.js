'use strict';

angular.module('Services', [])
.service('ValueService', function(){
	this.InitialValue = function($scope, val){
		if($scope.values.displayValue === '0'){
			$scope.values.displayValue = '' + val;
		}
		else{
			$scope.values.displayValue += val;
		}

		$scope.values.currentValue = Number($scope.values.displayValue);
	};

	this.SecondValue = function($scope, val){
		if($scope.values.currentValue === 0){
			$scope.values.displayValue = '' + val;
		}
		else{
			$scope.values.displayValue += val;
		}

		$scope.values.currentValue = Number($scope.values.displayValue);
	};
});
