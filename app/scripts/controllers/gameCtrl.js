'use strict';

angular.module('angularDemoApps')

.controller('GameCtrl',

  ['$scope', 'canvasDrawer', 'paddleFactory', 'ballFactory', 'animateService',

  function($scope, canvasDrawer, paddleFactory, ballFactory, animateService){
    animateService.cancelAnimationFrame();

    var time = null;

    var drawBoard = function(timestamp){
      var progress;
      if(time === null) {
        time = timestamp;
      }
      progress = timestamp - time;

      canvasDrawer.clearBoard();
      canvasDrawer.drawPaddles($scope.paddles);
      $scope.ball.x += canvasDrawer.checkCollisionOfBoarders($scope.ball);
      canvasDrawer.drawBall($scope.ball);


      animateService.invokeAnimationFrame(drawBoard);
      
    };

    var initializePaddles = function(){
      var paddleHeight = 60;
      var paddleWidth = 20;

      var canvas = canvasDrawer.getCanvas();
      
      var canvasHeight = canvas.height;
      canvasHeight = canvasHeight/2 - paddleHeight/2;
      
      var canvasWidth = canvas.width;
      canvasWidth = canvasWidth - paddleWidth - 10;
      
      $scope.paddles = [
        paddleFactory.createPaddle(10, canvasHeight,paddleHeight,paddleWidth).setStyle('rgb(200,0,0)'),
        paddleFactory.createPaddle(canvasWidth,canvasHeight,paddleHeight,paddleWidth).setStyle('rgb(0,200,200)')
      ];
    };

    var initializeBall = function(){
      var canvas = canvasDrawer.getCanvas();

      $scope.ball = ballFactory.createBall(canvas.width/2,canvas.height/2,15);
      $scope.ball.setStyle('white');
    };

    $scope.clickHeader('game');
    $scope.scores = {'red': 0, 'blue': 0};
    
    initializePaddles();
    initializeBall();

    animateService.invokeAnimationFrame(drawBoard);
  }]);


