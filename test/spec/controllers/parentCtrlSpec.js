'use strict';

describe('Test for ParentCtrl', function(){

	// load the controller's module
  beforeEach(module('angularDemoApps'));

  var ParentCtrl, scope;

  var initializeVars = function (controller, rootScope, loc) {
    scope = rootScope.$new();
    
    ParentCtrl = controller('ParentCtrl', {
      $scope: scope,
      $location: loc
    });
  };

  it('should check the initial values for Header', inject(function ($controller, $rootScope, $location) {
    $location.path('/');
    initializeVars($controller, $rootScope, $location);
    expect(scope.header).toEqual({'home' : true, 'calculator' : false});
  }));

  it('should go to the calculator header', inject(function($controller, $rootScope, $location){
    $location.path('calculator');
    initializeVars($controller, $rootScope, $location);
    expect(scope.header).toEqual({'home' : false, 'calculator' : true});
  }));

  it('will set home to false when calc is clicked', inject(function ($controller, $rootScope, $location) {
    $location.path('/');
    initializeVars($controller, $rootScope, $location);
	  expect(scope.header).toEqual({'home' : true, 'calculator' : false});
	  scope.clickHeader('calculator');
	  expect(scope.header.calculator).toEqual(true);
	  expect(scope.header.home).toEqual(false);
	  scope.clickHeader('home');
	  expect(scope.header.calculator).toEqual(false);
	  expect(scope.header.home).toEqual(true);
  }));
});