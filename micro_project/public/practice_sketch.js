
 var socket;
 let startTime,endTime, typeSpeed, wps, wpss;
 let tim = 0;
 
 
function setup() {
  createCanvas(600, 350).position(870,120);
  score = 100;
//  socket = io.connect('http://localhost:3000');
 background("gray");
//  socket.on('mouse',newDrawing);

}

function draw(){
  line(85, 649, 80, 0);
  line(420, 500, 415, 0);
  if(!gameOver()){
  start();
  }else{
    timeDisplay.innerHTML = 0;
  }
}
function keyPressed() {
   
  console.log('sending'+score);
//   data = {
//     x:score,
//   }
//   socket.emit('mouse',data);
  let c = color('#0f0');
  fill(c);
  ellipse(score,35,35,35);
  
  
}
// function newDrawing(data){
//   console.log(data);
//   console.log('data.x is '+ data.x);
//   fill(255,0,30);
//   ellipse(data.x,90,35,35);
//   console.log(wordInput.value);  
  
// }

function gameOver(e){
  if(score === 420){
  score = 700;
  endTime = new Date().getTime();
  console.log("start"+startTime);
  console.log("end"+endTime);
  let timediff = endTime - startTime;
  console.log(timediff);
  
  let typeSpeed = timediff/1000;
  wps = (130/10)*typeSpeed;
  wpss = Math.round(wps);
  alert(" congratulations you completed the game");
  typeSpeedDisplay.innerHTML = wpss +" words per second";
  
  e.preventDefault();
  
  }
}

function start(){
  startTime = new Date().getTime();
 
 
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








