'use strict';

describe('Service: EquationService', function () {

  // load the controller's module
  beforeEach(function(){
    module('Services');
  });

  var EquationService, total, currentValue;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    EquationService = $injector.get('EquationService');
    total = 25;
    currentValue = 10;
  }));

  it('should check if the EquationService is defined', function(){
    expect(EquationService).toBeDefined();
  });

  it('should evaluate add function', function(){
      var result = EquationService.add(total, currentValue);
      expect(result).toBe(35);
    });

  it('should evaluate subtract function', function(){
      var result = EquationService.subtract(total, currentValue);
      expect(result).toBe(15);
    });

  it('should evaluate divide function', function(){
      var result = EquationService.divide(total, currentValue);
      expect(result).toBe(2.5);
    });

  it('should evaluate divide by zero', function(){
    currentValue = 0;
    var result = EquationService.divide(total, currentValue);
    expect(result).toBeNaN();
  });

  it('should evaluate multiply function', function(){
      var result = EquationService.multiply(total, currentValue);
      expect(result).toBe(250);
    });

});
