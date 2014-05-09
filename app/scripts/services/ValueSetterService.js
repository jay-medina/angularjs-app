'use strict';

angular.module('Services')
.service('ValueService', function(){

	var decimalCheck = function(displayValue){
		for(var i in displayValue){
			if(displayValue[i] === '.'){
				return true;
			}
		}
		return false;
	};

	this.InitialValue = function($scope, val){
		var decimalVal = decimalCheck(val);
		if($scope.values.displayValue === '0' && !decimalVal){
			$scope.values.displayValue = '' + val;
		}
		else if(decimalVal && !decimalCheck($scope.values.displayValue)){
			$scope.values.displayValue += val;
		}
		else if(!decimalVal){

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
