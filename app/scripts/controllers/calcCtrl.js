'use strict';

angular.module('angularDemoApps')
.controller('CalcCtrl', ['$scope', function($scope){
		$scope.val = '0';

		//var sum = 0;

		$scope.setValue = function(val){
			if($scope.val === '0'){
				$scope.val = val;
			}
			else{
				$scope.val += ''+val;
			}
		};

		$scope.setOperation = function(op){
			if('+' === op){

			}
		};

  }]);