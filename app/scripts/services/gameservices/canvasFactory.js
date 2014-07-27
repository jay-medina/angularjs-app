'use strict';

angular.module('Factory')

.factory('canvasDrawer', function() {
    var canvas =  null;
    var ctx = null;

    function initializeCanvas(){
		  var canvas = document.getElementById('canvas');
		  canvas.style.width='80%';
		  canvas.style.height='100%';
		  canvas.style['min-height'] = '300px';
		  canvas.width  = canvas.offsetWidth;
		  canvas.height = canvas.offsetHeight;
		  canvas.style['background-color'] = 'black';
		  return canvas;
    }

    function initializeBoard(){
      ctx.strokeStyle = 'white';
      ctx.beginPath();

      var width = canvas.width;
      ctx.moveTo(width/2,0);
	    ctx.lineTo(width/2,canvas.height);
	    ctx.closePath();
	    ctx.stroke();

      return ctx;
    }

    function drawBallOnCanvas(ball){
      ctx.fillStyle = ball.style;
      ctx.beginPath();

      ctx.arc(ball.x,ball.y,ball.radius,0, Math.PI*2, false);
      ctx.fill();
    }

    function checkCollisionOfBoarders(ball){

      if(ball.x + ball.radius > canvas.width){
        reverse = -1;
      }

      if(ball.x - ball.radius < 0){
        reverse = 1;
      }

      return reverse * 2;

    }
    var reverse = 1;

    return {
      getCanvas: function(){
        canvas = initializeCanvas();
        ctx = canvas.getContext('2d');
        return canvas;
      },
      drawBall: function(ball){
        drawBallOnCanvas(ball);
      },
      clearBoard: function(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        initializeBoard();
      },
      checkCollisionOfBoarders : checkCollisionOfBoarders,

      drawPaddles: function(paddles) {
          
          paddles.forEach(function(paddle){
            ctx.fillStyle = paddle.style;
            ctx.fillRect (paddle.x, paddle.y, paddle.width, paddle.height);
          });
        }
    };
  });