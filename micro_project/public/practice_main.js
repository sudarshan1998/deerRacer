window.addEventListener('load', init);
// var socket;
// socket = io.connect('http://localhost:3000');
// socket.on('index',newWords);
// Globals

// Available Levels
const levels = {
  easy: 50,
  medium: 31,
  hard: 11
};

// To change level
const currentLevel = levels.medium;

let time = 1;
let score = 0;
let isPlaying;



// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
// const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const typeSpeedDisplay = document.querySelector('#typeSpeed');
// const resultDisplay = document.querySelector('#result');
const message = document.querySelector('#message');

// const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  // seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  // setInterval(countdown, 1000);
  // Check game status
  // setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 1;
    showWord(words);
    wordInput.value = '';
    score = score+10;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  }
   else {
    //  console.log(wordInput.value);
    message.innerHTML = 'keep on going';
    return false;
  }

}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
//   dataIndex = {
//       index : randIndex,
//   }
//   socket.emit('index',dataIndex);
  currentWord.innerHTML = words[randIndex];
  
}
function newWords(dataIndex){
  currentWord.innerHTML = words[randIndex.dataIndex];
}

// Countdown timer
// function countdown() {
//   // Make sure time is not run out 
//     // Decrement
//     time++;
  
//   // Show time
//   timeDisplay.innerHTML = time;
// }

// // Check game status
// function checkStatus() {
//   if (!isPlaying && time === 0) {
//     message.innerHTML = 'Game Over!!!';
//     score = -1;
//   }
// }




