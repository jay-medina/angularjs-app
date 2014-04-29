'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(function(){
    module('angularDemoApps');
  });

  var MainCtrl, scope, header;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    scope.clickHeader = function(page){
        header = page;
      };

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should check that header is "home"', function(){
    expect(header).toBe('home');
  });

  it('should check that the list of things are 4', function () {
    expect(scope.things.length).toBe(4);
  });

  it('should add an item', function(){
    scope.newTodo = 'StarFish';
    scope.addTodo();
    expect(scope.newTodo).toBe('');
    expect(scope.things.length).toBe(5);
  });

  it('should check that you can add two of the same thing', function(){
    scope.newTodo = 'StarFish';
    scope.addTodo();
    expect(scope.newTodo).toBe('');
    expect(scope.things.length).toBe(5);
    expect(scope.things).toContain({'item': 'StarFish'});
    scope.newTodo = 'StarFish';
    scope.addTodo();
    expect(scope.things.length).toBe(6);
    expect(scope.things).toContain({'item':'StarFish'});
  });

  it('should remove the item', function(){
    scope.newTodo = 'Bananas';
    scope.addTodo();
    scope.removeTodo(4);
    expect(scope.things.length).toBe(4);
    expect(scope.things).not.toContain({'item': 'StarFish'});

  });


});
