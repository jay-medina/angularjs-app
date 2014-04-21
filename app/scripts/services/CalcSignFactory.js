'use strict';
/**
* Factory Module
*
* Module for calculator sign items
*/

angular.module('Factory')

.factory('Sign', function(){
	
	var add = '+';
	var subtract = '-';
	var divide = '/';
	var multiply = '*';

	return {
		add: add,
		subtract: subtract,
		divide: divide,
		multiply: multiply
	};
});