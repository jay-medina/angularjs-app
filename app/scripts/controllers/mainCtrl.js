'use strict';

angular.module('angularDemoApps')
  .controller('MainCtrl', function ($scope) {
    $scope.things = [];


    (function(){
      var items = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Banana'
      ];

      for(var i = 0; i < items.length; i++){
        $scope.things.push({'item': items[i]});
      }
    })();

    $scope.newTodo = '';

    $scope.addTodo = function(){
		  $scope.things.push({'item':$scope.newTodo});
		  $scope.newTodo = '';
    };

    $scope.removeTodo = function(index){
      $scope.things.splice(index, 1);
    };
  });
