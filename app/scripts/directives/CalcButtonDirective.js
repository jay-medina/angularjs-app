'use strict';

angular.module('Directives')

.directive('calcButton', function(){

	return {
		restrict: 'E',
		//template: 'Hello This is a new directive'
		templateUrl: 'views/calcButton.html'
	};
});