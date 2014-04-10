'use strict';

angular.module('angularDemoApps', [
  'ngResource',
  'ngRoute',
  'Services'
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
      .otherwise({
        redirectTo: '/'
      });
  });
