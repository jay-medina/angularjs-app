'use strict';

angular.module('angularDemoApps', [
  'ngResource',
  'ngRoute',
  'Services',
  'Factory'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/calculator', {
        templateUrl: 'views/calculator.html',
        controller: 'CalcCtrl'
      })
      .when('/Game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  

angular.module('Services', []);
angular.module('Factory', []);