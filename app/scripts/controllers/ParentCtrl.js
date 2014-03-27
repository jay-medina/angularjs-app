'use strict';


angular.module('angularDemoApps').controller('ParentCtrl', function($scope){
      $scope.header = {'home' : true, 'calc' : false};

      var initializeAllHeaders = function(){
      		for(var i in $scope.header){
      			$scope.header[i] = false;
      		}
      };

      $scope.clickHeader = function(page){
      		initializeAllHeaders();
      		$scope.header[page] = true;
      };

    });