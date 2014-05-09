'use strict';

describe('Controller: CalcCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('angularDemoApps');
    module('Services');
    module('Factory');
  });

  var CalcCtrl, scope, header, ValueService, EquationService, Sign;

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
    EquationService = $injector.get('EquationService');
    Sign = $injector.get('Sign');
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

  var evaluateEquationTests = function(Sign, method, resultValue){
      
      scope.values.currentValue = 10;
      scope.values.displayValue = '10';
      scope.values.total = 34;
      scope.sign = Sign;

      scope.evaluate();
      expect(scope.evaluateHit).toBe(true);
      expect(scope.values.total).toBe(resultValue);
      expect(scope.values.displayValue).toBe('' + resultValue);
      expect(scope.values.currentValue).toBe(resultValue);
      expect(scope.sign).toBe('');
      expect(method).toHaveBeenCalled();
    };

  it('should evaluate the equation by add', function(){
      spyOn(EquationService, 'add').andCallFake(function(total, currentVal){
          return total + currentVal;
        });
      evaluateEquationTests(Sign.add, EquationService.add, 44);
    });

  it('should evaluate the equation by subtract', function(){
      spyOn(EquationService, 'subtract').andCallFake(function(total, currentVal){
          return total - currentVal;
        });
      evaluateEquationTests(Sign.subtract, EquationService.subtract, 24);
    });

  it('should evaluate the equation by divide', function(){
      spyOn(EquationService, 'divide').andCallFake(function(total, currentVal){
          return total / currentVal;
        });
      evaluateEquationTests(Sign.divide, EquationService.divide, 3.4);
    });

  it('should evaluate the equation by multiply', function(){
      spyOn(EquationService, 'multiply').andCallFake(function(total, currentVal){
          return total * currentVal;
        });
      evaluateEquationTests(Sign.multiply, EquationService.multiply, 340);
    });
});