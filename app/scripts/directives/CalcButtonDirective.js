'use strict';

angular.module('Directives')

.directive('numberButton', function(){


	return {
		//restricts to element others are 'A'ttribute, 'C'lass, 'M'essage aka Comment
		restrict: 'E',
		scope: { //isolated scope object for the directive
			//value: '=value' two way binding
			setValue: '=myClick',
		},
		//replaces the existing tags with ones that are in the template
		//replace: true,  been deprecated :(
		transclude: true, // if you want to bring in the scope from the parent
		link: function(scope, element){
			//gets called if the compile function isnt implemented
			//if you want to manipulate the DOM of the template (numberButton.html)
			//you would but that code here.
			//scope is the directive scope
			//element is a jQuery lite element
			//attrs are the attributes passed in
			scope.value = parseInt(element.text(), 10);
		},
		//compile function allows you to edit the template before it has been rendered
		//controller: controller dedicated for the directive
		//template: 'Hello This is a new directive'
		templateUrl: 'views/numberButton.html'
	};
});