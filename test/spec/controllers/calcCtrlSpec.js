'use strict';

describe('Controller: CalcCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('angularDemoApps');
    module('Services');
  });

  var CalcCtrl, scope, header, ValueService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();

    scope.clickHeader = function(page){
      header = page;
    };

    CalcCtrl = $controller('CalcCtrl', {
      $scope: scope
    });

    ValueService = $injector.get('ValueService');
  }));

  it('should check that header is "calculator"', function () {
    expect(header).toBe('calculator');
  });

  it('checks negative cases with backTrack function', function(){
    scope.values.currentValue = 0;
    scope.backTrack();
    expect(scope.values.currentValue).toBe(0);
    expect(scope.evaluateHit).toBe(false);
    scope.values.currentValue = 34;
    scope.evaluateHit = true;
    scope.backTrack();
    expect(scope.values.currentValue).toBe(34);
    expect(scope.evaluateHit).toBe(true);
  });

  it('should backTrack the display Value', function() {
    scope.values.currentValue = 34;
    scope.values.displayValue = 34 + '';
    scope.backTrack();
    expect(scope.values.displayValue).toBe('3');
    expect(scope.values.currentValue).toBe(3);
    scope.backTrack();
    expect(scope.values.currentValue).toBe(0);
    expect(scope.values.displayValue).toBe('0');
    expect(scope.values.total).toBe(0);
  });

  it('should clearValues but not reset them', function(){
    scope.values.currentValue = 3;
    scope.values.displayValue = '3';
    scope.clearValue();
    expect(scope.values.currentValue).toBe(0);
    expect(scope.values.displayValue).toBe('0');
  });

  it('should clearValues and reset them', function(){
    scope.values.currentValue = 3;
    scope.values.displayValue = '3';
    scope.values.total = 34;
    scope.evaluateHit = true;

    scope.clearValue(true);
    expect(scope.values.currentValue).toBe(0);
    expect(scope.values.total).toBe(0);
    expect(scope.evaluateHit).toBe(false);
    expect(scope.equation).toBe('');
  });

  it('should setValue hit when a key is clicked', function(){
    spyOn(ValueService, 'InitialValue').andCallFake(function(scope,val){
        scope.values.currentValue = val;
        scope.values.displayValue = '' + val;
      });
    scope.evaluateHit = true;
    scope.sign = '';
    scope.setValue(4);
    expect(ValueService.InitialValue).toHaveBeenCalled();
    expect(scope.values.currentValue).toBe(4);
    expect(scope.values.displayValue).toBe('4');

  });

  it('should setValue hit when a key is clicked for a second Time', function(){
    spyOn(ValueService, 'SecondValue').andCallFake(function(scope,val){
        scope.values.displayValue += val;
        scope.values.currentValue = Number(scope.values.displayValue);

      });
    scope.evaluateHit = false;
    scope.sign = '+';
    scope.values.displayValue = '42';
    scope.values.currentValue = 42;
    scope.setValue(4);
    expect(ValueService.SecondValue).toHaveBeenCalled();
    expect(scope.values.currentValue).toBe(424);
    expect(scope.values.displayValue).toBe('424');

  });
});