'use strict';

angular.module('angularDemoApps')
.controller('CalcCtrl', ['$scope', function($scope){
		$scope.val = '0';

		//var sum = 0;

		$scope.backTrack = function(){
			if($scope.val !== '0'){
				$scope.val = $scope.val.substring(0, $scope.val.length-1);
				if($scope.val === ''){
					$scope.clearValue();
				}
			}
		};

		$scope.clearValue = function(){
			$scope.val = '0';
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
			if('+' === op){

			}
		};

  }]);