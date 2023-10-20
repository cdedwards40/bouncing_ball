//Set global variable that would contain the position, velocity and the html element "ball"
var velocityX = 25;
var velocityY = 15;
var positionX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var positionY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var reverseX = false;
var reverseY = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = velocityX;
  var Xmax = 1200-velocityX/2;
  var Ymin = velocityY;
  var Ymax = 800-velocityY/2;

  if (positionX[0] > Xmax) {
    reverseX = true;
  } else if (positionX[0] < Xmin) {
    reverseX = false;
  }

  if (positionY[0] > Ymax) {
    reverseY = true;
  } else if (positionY[0] < Ymin) {
    reverseY = false;
  }

  if (!reverseX) {
    positionX = [positionX[0] + velocityX, ... positionX.slice(0, -1)];
  } else {
    positionX = [positionX[0] - velocityX, ... positionX.slice(0, -1)];
  }
  

  if (!reverseY) {
    positionY = [positionY[0] + velocityY, ... positionY.slice(0, -1)];
  } else {
    positionY = [positionY[0] - velocityY, ... positionY.slice(0, -1)];
  }

  for (let i=0; i<10; i++) {
    const ball = document.getElementById("ball"+i)
    ball.style.left = positionX[i] + "px";
    ball.style.top = positionY[i] + "px";
    ball.style.opacity = (1-i/10)**3;
    ball.style.zIndex = 10-i;
    if (i == 0) {
      ball.style.border = "2px solid";
      ball.style.borderColor = "black";
      
    }
  }
  
}

// This call the moveBall function every 100ms
setInterval(moveBall, 50);
// moveBall()
// moveBall()
// moveBall()
// moveBall()