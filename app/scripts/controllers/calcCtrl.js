'use strict';

angular.module('angularDemoApps')
.controller('CalcCtrl', ['$scope', 'ValueService', function($scope, ValueService){
		$scope.values = {displayValue: '0', currentValue: 0, total: 0};
		$scope.equation = '';
		$scope.sign = '';

		$scope.backTrack = function(){
			if($scope.values.currentValue !== 0){
				var displayValue = $scope.values.displayValue;
				$scope.values.displayValue = displayValue.slice(0, displayValue.length-1);
				if($scope.values.displayValue === ''){
					$scope.clearValue();
				}
			}
		};

		$scope.clearValue = function(reset){
			$scope.values.displayValue = '0';
			$scope.values.currentValue = 0;
			$scope.values.total = 0;
			if(reset){
				setEquation('reset');
			}
		};

		$scope.setValue = function(val){
			if($scope.sign === ''){
				ValueService.InitialValue($scope, val);
			}
			else{
				ValueService.SecondValue($scope,val);
			}
		};

		$scope.setOperation = function(op){
			if('+' === op || '-' === op || '*' === op || '/' === op){

				setEquation(op);
				$scope.values.total = $scope.values.currentValue;
				$scope.values.currentValue = 0;


			}
		};

		var setEquation = function(eqSign){
			if(eqSign === 'reset'){
				$scope.equation = $scope.sign = '';
			}
			else{
				$scope.equation = $scope.values.displayValue + '  ' + eqSign;
				$scope.sign = eqSign;
			}
			
		};

  }]);


