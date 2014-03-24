'use strict';

angular.module('todoApp')
.controller('calcCtrl', ['$scope', function($scope){
		$scope.select.home = 'False';
		$scope.select.calc = '';
		$scope.val = '0';

		var sum = 0;

		$scope.setValue = function(val){
			if($scope.val === '0'){
				$scope.val = val;
			}
			else{
				$scope.val += ""+val;
			}
		};

		$scope.setOperation = function(op){
			if("+" === op){

			}
		}

  }]);