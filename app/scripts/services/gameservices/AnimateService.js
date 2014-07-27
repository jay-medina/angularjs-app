'use strict';

angular.module('Services')
.service('animateService', function(){

	var animationFrame = window.requestAnimationFrame;

	var animationFrameId = null;

	this.invokeAnimationFrame = function(callBack){

		animationFrameId = animationFrame(callBack);
		return animationFrameId;
	};

	this.cancelAnimationFrame = function(){
		if(animationFrameId){
			window.cancelAnimationFrame(animationFrameId);
		}
		
	};

});