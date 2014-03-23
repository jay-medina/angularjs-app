'use strict';

angular.module('todoApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'calcCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller("ParentCtrl", function($scope){
      $scope.select = {"home" : "", "calc" : "false"};

  });
