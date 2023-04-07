function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByClassName("big-hexagon")[0].style.backgroundColor=b;
    }


    
  
const gamebox = document.getElementById('gamebox')
const SQUARES = 209
const squareColor = "none"

for(let i= 0; i < SQUARES; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => removeColor(square))

  gamebox.appendChild(square)
}

function removeColor(element){
  element.style.background = squareColor
  element.style.boxShadow = `none`
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const okButton = document.getElementById('ok-button');
let ball = {x: 0, y: 0};

let isDrawing = false;
let path = [];

canvas.addEventListener('mousedown', function(event) {
  isDrawing = true;
  path.push({x: event.clientX, y: event.clientY});
});

canvas.addEventListener('mousemove', function(event) {
  if (isDrawing) {
    path.push({x: event.clientX, y: event.clientY});

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);

    for (let i = 1; i < path.length; i++) {
      ctx.lineTo(path[i].x, path[i].y);
    }

    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', function(event) {
  isDrawing = false;
});

okButton.addEventListener('click', function() {
  animateBall();
});

function animateBall() {
  let i = 0;

  function moveBall() {
    if (i < path.length) {
      ball.x = path[i].x;
      ball.y = path[i].y;
      i++;
      drawBall();
     
      requestAnimationFrame(moveBall);
    }
  }

  moveBall();
}



function selectBall(ball) {
 
const balls = document.querySelectorAll('.ball');
for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener('click', () => selectBall(balls[i]));
}
}

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
  ctx.fillStyle = 'pink';
  ctx.fill();
}


