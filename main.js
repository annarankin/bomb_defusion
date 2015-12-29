// ------------- Solution 1 -------------

// var redWire = document.querySelector('#red');
// var greenWire = document.querySelector('#green');
// var blueWire = document.querySelector('#blue');

// var cutWire = function(event){
//   event.target.classList.toggle('cut');
//   if (event.target.id === "red") {
//     window.alert('You saved us all!');
//   } else {
//     window.alert('YOU KILLED US ALL');
//   }
//   redWire.removeEventListener('click', cutWire);
//   blueWire.removeEventListener('click', cutWire);
//   greenWire.removeEventListener('click', cutWire);
// }

// redWire.addEventListener('click', cutWire);
// blueWire.addEventListener('click', cutWire);
// greenWire.addEventListener('click', cutWire);

// ------------- Solution 2 -------------

var counter = document.querySelector('#counter');
var redWire = document.querySelector('#red');
var greenWire = document.querySelector('#green');
var blueWire = document.querySelector('#blue');
var instructionDiv = document.querySelector('#instructions');
var counterId;

var cutWire = function(event){
  event.target.classList.toggle('cut');
  if (event.target.id === "red") {
    window.alert('You saved us all!');
    counter.textContent = "WIN";
  } else {
    window.alert('YOU KILLED US ALL');
    counter.textContent = "DEAD";
  }
  window.clearInterval(counterId);
}

// Taking 'time' as a parameter so that our function is versatile - can set any time limit with the same function!
var startCountDown = function(time) {
  // WHen this function is run, we want to set our timer to the number of seconds it will count down from
  counter.textContent = time;

  counterId = window.setInterval(function(){
    if (time < 1) {
      counter.textContent = "DEAD";
      window.clearInterval(counterId);
    } else {
      time--;
      counter.textContent = time;
    }
  }, 1000);
};

redWire.addEventListener('click', cutWire);
blueWire.addEventListener('click', cutWire);
greenWire.addEventListener('click', cutWire);