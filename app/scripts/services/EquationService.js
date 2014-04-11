'use strict';

angular.module('Services')

.service('EquationService', function(){
	
	this.add = function(total, currentValue){
		total = Number(total);
		currentValue = Number(currentValue);

		return total + currentValue;
	};

});