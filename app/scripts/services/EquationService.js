'use strict';

angular.module('Services')

.service('EquationService', function(){
	
	this.add = function(total, currentValue){
		total = Number(total);
		currentValue = Number(currentValue);

		return total + currentValue;
	};

	this.subtract = function(total, currentValue){
		total = Number(total);
		currentValue = Number(currentValue);

		return total - currentValue;
	};

	this.divide = function(total, currentValue){
		total = Number(total);
		currentValue = Number(currentValue);

		if(currentValue === 0){
			return NaN;
		}

		return total / currentValue;
	};

	this.multiply = function(total, currentValue){
		total = Number(total);
		currentValue = Number(currentValue);

		return total * currentValue;
	};

});