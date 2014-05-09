'use strict';


angular.module('angularDemoApps').controller('ParentCtrl', function($scope, $location){

      $scope.header = {'home' : false, 'calculator' : false, 'game' : false};

      var initializeAllHeaders = function(){
            for(var i in $scope.header){
              $scope.header[i] = false;
            }
          };

      $scope.clickHeader = function(page){
            initializeAllHeaders();
            $scope.header[page] = true;
          };

      var path = $location.path();
      path = path.split('/')[1];
      
      if('' === path){
        $scope.clickHeader('home');
      }
      else{
        $scope.clickHeader(path);
      }

      
    });