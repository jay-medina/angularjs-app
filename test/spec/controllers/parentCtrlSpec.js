'use strict';

describe('Test for ParentCtrl', function(){

	// load the controller's module
  beforeEach(module('angularDemoApps'));

  var ParentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ParentCtrl = $controller('ParentCtrl', {
      $scope: scope
    });
  }));

  it('should check the initial values for Header', function () {
    expect(scope.header).toEqual({'home' : true, 'calc' : false});
  });

  it('will set home to false when calc is clicked', function(){
	  expect(scope.header).toEqual({'home' : true, 'calc' : false});
	  scope.clickHeader('calc');
	  expect(scope.header.calc).toEqual(true);
	  expect(scope.header.home).toEqual(false);
	  scope.clickHeader('home');
	  expect(scope.header.calc).toEqual(false);
	  expect(scope.header.home).toEqual(true);
  });
});