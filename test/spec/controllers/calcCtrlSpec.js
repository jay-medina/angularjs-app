'use strict';

describe('Controller: CalcCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApps'));

  var CalcCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalcCtrl = $controller('CalcCtrl', {
      $scope: scope
    });
  }));

  it('test', function () {
    expect(true).toBe(true);
  });
});