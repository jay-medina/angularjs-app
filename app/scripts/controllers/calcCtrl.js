'use strict';

angular.module('angularDemoApps')
.controller('CalcCtrl',

	['$scope', 'ValueService', 'EquationService', 'Sign',

	function($scope, ValueService, EquationService, Sign){
		$scope.clickHeader('calculator');
		$scope.values = {displayValue: '0', currentValue: 0, total: 0};
		$scope.equation = '';
		$scope.sign = '';
		$scope.evaluateHit = false;
		$scope.numbers = {};

		for(var i = 0; i < 10; i++){
			$scope.numbers[i] = i;
		}

		$scope.backTrack = function(){
			if($scope.values.currentValue !== 0 && !$scope.evaluateHit){
				var displayValue = $scope.values.displayValue;
				$scope.values.displayValue = displayValue.slice(0, displayValue.length-1);
				if($scope.values.displayValue === ''){
					$scope.clearValue();
				}
				else{
					$scope.values.currentValue = Number($scope.values.displayValue);
				}
			}
		};

		$scope.clearValue = function(reset){
			$scope.values.displayValue = '0';
			$scope.values.currentValue = 0;
			$scope.values.total = 0;
			if(reset){
				$scope.evaluateHit = false;
				setEquation('reset');
			}
		};

		$scope.setValue = function(val){
			if($scope.evaluateHit){
				$scope.values.displayValue = '0';
				$scope.evaluateHit = false;
			}
			if($scope.sign === ''){
				ValueService.InitialValue($scope, val);
			}
			else{
				ValueService.SecondValue($scope,val);
			}
		};

		$scope.setOperation = function(op){
			if(Sign.add === op ||
			   Sign.subtract === op ||
			   Sign.multiply === op ||
			   Sign.divide === op){

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

		$scope.evaluate = function(){
			var sum = 0;
			$scope.evaluateHit = true;
			if($scope.sign === Sign.add){
				sum = EquationService.add($scope.values.total, $scope.values.currentValue);
				evaluateParam(sum);
			}
			else if($scope.sign === Sign.subtract){
				sum = EquationService.subtract($scope.values.total, $scope.values.currentValue);
				evaluateParam(sum);
			}
			else if($scope.sign === Sign.divide){
				sum = EquationService.divide($scope.values.total, $scope.values.currentValue);
				evaluateParam(sum);
			}
			else if($scope.sign === Sign.multiply){
				sum = EquationService.multiply($scope.values.total, $scope.values.currentValue);
				evaluateParam(sum);
			}

		};

		var evaluateParam = function(sum){
			setEquation('reset');
			$scope.values.total = sum;
			$scope.values.displayValue = '' + sum;
			$scope.values.currentValue = sum;
			$scope.sign = '';
		};

  }]);


