'use strict';

angular.module('angularDemoApps')
.controller('CalcCtrl', ['$scope', function($scope){
		$scope.finalVal = 0;
		$scope.val = '0';
		$scope.equation = '';

		$scope.backTrack = function(){
			if($scope.val !== '0' && $scope.equation === ''){
				$scope.val = $scope.val.substring(0, $scope.val.length-1);
				if($scope.val === ''){
					$scope.clearValue();
				}
			}
		};

		$scope.clearValue = function(){
			$scope.val = '0';
			setEquation('reset');
		};

		$scope.setValue = function(val){
			if($scope.val === '0'){
				if(val !== 0){
					$scope.val = val;
				}
			}
			else{
				$scope.val += '' + val;
			}
		};

		$scope.setOperation = function(op){
			if('+' === op || '-' === op || '*' === op || '/' === op){
				setEquation(op);
			}
		};

		var setEquation = function(eqSign){
			if(eqSign === 'reset'){
				$scope.equation = '';
			}
			else{
				$scope.equation = $scope.val + '  ' + eqSign;
			}
			
		};

  }]);