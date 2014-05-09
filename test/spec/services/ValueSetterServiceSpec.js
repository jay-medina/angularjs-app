'use strict';

describe('Service: ValueService', function () {

  // load the controller's module
  beforeEach(function(){
    module('Services');
  });

  var ValueService, scope, val;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    ValueService = $injector.get('ValueService');
    scope = {};
    scope.values = {};
    val = 4;
  }));

  it('should check if the ValueService is defined', function(){
    expect(ValueService).toBeDefined();
  });

  it('should check the InitialValue method', function(){
    scope.values.displayValue = '0';
    
    ValueService.InitialValue(scope, val);
    expect(scope.values.displayValue).toBe('4');
    expect(scope.values.currentValue).toBe(4);

    val = '5';
    ValueService.InitialValue(scope, val);
    expect(scope.values.displayValue).toBe('45');
    expect(scope.values.currentValue).toBe(45);
  });

  it('should check the InitialValue method with a decimal as value', function(){
    scope.values.displayValue = '0';
    val = '.';
    
    ValueService.InitialValue(scope, val);
    expect(scope.values.displayValue).toBe('0.');
    expect(scope.values.currentValue).toBe(0);

    /* Testing if you try to add a '.' again */
    ValueService.InitialValue(scope, val);
    expect(scope.values.displayValue).toBe('0.');
    expect(scope.values.currentValue).toBe(0);

    scope.values.displayValue = '4';
    scope.values.currentValue = 4;
    ValueService.InitialValue(scope, val);
    expect(scope.values.displayValue).toBe('4.');
    expect(scope.values.currentValue).toBe(4);
  });

});
