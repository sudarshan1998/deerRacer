
 var socket;

function setup() {
  createCanvas(600, 350).position(850,70);
  score = 100;
 socket = io.connect('http://localhost:3000');
 background(51);
 socket.on('mouse',newDrawing);

}

function draw(){
  line(85, 649, 80, 0);
  line(420, 500, 415, 0);
}
function keyPressed() {
   
  console.log('sending'+score);
  data = {
    x:score,
    y:gameOver(),
  }
  socket.emit('mouse',data);
  let c = color('#0f0');
  fill(c);
  ellipse(score,35,35,35);
  
}
function newDrawing(data){
  console.log(data);
  console.log('data.x is '+ data.x);
  fill(255,0,30);
  ellipse(data.x,90,35,35);
  console.log(wordInput.value);  
}

function gameOver(e){
  if(score === 420){
  alert(" congratulation you completed the game");
  e.preventDefault();
  }
}

// function mouseDragged(){
//   background(51);
//   console.log('sending'+mouseX + ',' + mouseY);
//   console.log(score);
//   var data = {
//     x:score,    
//   }
//   socket.emit('mouse',data);
//   let i;
//     background(51);
//     ellipse(30,score,30,30);
   
//     if(score > 500){
//       i = 30;
//     }
  
//   }








