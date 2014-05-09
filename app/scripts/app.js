'use strict';

angular.module('angularDemoApps', [
  'ngResource',
  'ngRoute',
  'Services',
  //'Directives',
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
      .when('/2048', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  

angular.module('Services', []);
angular.module('Factory', []);
/*angular.module('Directives', [])

.directive('something', function(){

  var link = function(){

  };

  return {
    link: link
  };

}); */