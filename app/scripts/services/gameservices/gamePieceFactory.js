'use strict';

angular.module('Factory')

.factory('paddleFactory', function() {
    
    function Paddle(x,y,height,width){
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.setStyle = function(style){
        this.style = style;
        return this;
      };


    }
    
    return {
      createPaddle : function(x,y,height,width){
          return new Paddle(x,y,height,width);
        }
    };
  })
.factory('ballFactory', function(){
  
    function Ball(x,y, radius){
      this.x = x;
      this.y = y;
      this.radius= radius;
      
      this.setStyle= function(style){
        this.style= style;
        return this;
      };
    }

    return {
      createBall : function(x, y, radius){
        return new Ball(x,y,radius);
      }
    };

  });