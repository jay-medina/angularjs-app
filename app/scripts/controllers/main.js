'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.select.home = '';
    $scope.select.calc = 'False';

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
