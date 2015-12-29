// Defining all of my variables up here, at the top, so they're available globally.
var counter = document.querySelector('#counter');
var startBtn = document.querySelector('#start');
var resetBtn = document.querySelector('#reset');
var redWire = document.querySelector('#red');
var greenWire = document.querySelector('#green');
var blueWire = document.querySelector('#blue');
var instructionDiv = document.querySelector('#instructions');
var wireSequence = ['red', 'blue', 'green'];
var counterId;
var numOfTries = 0;

// This function will display a simple message to our user that we 
// specify and pass in as an argument - represented here by the
// `message` parameter.
var displayMsg = function(message) {
  var modal = document.createElement('div');
  modal.className = "modal";
  var messageH2 = document.createElement('h2');
  messageH2.textContent = message;
  modal.appendChild(messageH2);
  document.body.appendChild(modal);
  msgTimerId = window.setTimeout(function() {
    document.body.removeChild(modal);
  }, 3000);
};


var cutWire = function(event){
  // Cut the wire! Adds a class of `cut` to the div that was clicked - 
  // the `target` of the click `event`.
  event.target.classList.add('cut');
  // Choose a random number between 0 and 2. This will serve as a way
  // for us to choose a new, random wire each time the game is played.
  var randomWire = Math.floor(Math.random() * 3);

  // If the clicked wire's id matches up with our randomly selected wire...
  if (event.target.id === wireSequence[randomWire]) {
    // They win!
    displayMsg('You saved us all!');
    counter.textContent = "WIN";
  } else {
    // Otherwise, they lose.
    displayMsg('YOU KILLED US ALL');
    counter.textContent = "DEAD";
  }
  // Once a wire has been clicked, win or lose, let's
  // remove all the event listeners we put on the wires so
  // that the user can't click on them once the game is over.
  redWire.removeEventListener('click', cutWire);
  greenWire.removeEventListener('click', cutWire);
  blueWire.removeEventListener('click', cutWire);
  // Let's also stop the countdown.
  window.clearInterval(counterId);
}

var startCountDown = function(time) {
  // When this function is run, we want to set our timer to the number of seconds 
  // it will count down from.
  counter.textContent = time;

  counterId = window.setInterval(function(){
    // If the timer runs out, the user loses.
    if (time < 1) {
      counter.textContent = "DEAD";
      window.clearInterval(counterId);
      redWire.removeEventListener('click', cutWire);
      greenWire.removeEventListener('click', cutWire);
      blueWire.removeEventListener('click', cutWire);
      displayMsg("Oh no, you're out of time!");
    } else {
      // Otherwise, decrement the counter and update the display on the DOM.
      time--;
      counter.textContent = time;
    }
  }, 1000);
};

// When the user clicks start, perform the following actions:
var clickStart = function() {
  startCountDown(30);
  redWire.addEventListener('click', cutWire);
  blueWire.addEventListener('click', cutWire);
  greenWire.addEventListener('click', cutWire);
  redWire.className = "wire";
  blueWire.className = "wire";
  greenWire.className = "wire";
  instructionDiv.classList.add('hidden');
};
// When the user clicks reset, perform the following actions:
var clickReset = function() {
  redWire.removeEventListener('click', cutWire);
  blueWire.removeEventListener('click', cutWire);
  greenWire.removeEventListener('click', cutWire);
  redWire.className = "wire";
  blueWire.className = "wire";
  greenWire.className = "wire";
  window.clearInterval(counterId);
  instructionDiv.classList.remove('hidden');
};

startBtn.addEventListener('click', clickStart);
resetBtn.addEventListener('click', clickReset);

