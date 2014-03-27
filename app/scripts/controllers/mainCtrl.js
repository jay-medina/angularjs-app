'use strict';

angular.module('angularDemoApps')
  .controller('MainCtrl', function ($scope) {

    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Banana'
    ];

    $scope.newTodo = '';

    $scope.addTodo = function(){
		  $scope.things.push($scope.newTodo);
		  $scope.newTodo = '';
    };

    $scope.removeItem = function(index){
      $scope.things.splice(index, 1);
    };
  });
