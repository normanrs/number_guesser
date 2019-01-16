var min = 1
var max = 100

function aMin(){
  var min = document.getElementById('min').value;
}

function aMax(){
  var max = document.getElementById('max').value;
}

var randomNumber = Math.floor(Math.random() * max ) + min;

var resultText = 'Make a guess';

function aGuess(){
  var guess = document.getElementById('guessInput').value;

  if (parseInt(guess) === randomNumber ) {
    lastGuess.innerHTML = 'BOOM!';
  }
  else if (parseInt(guess) > randomNumber){
    lastGuess.innerHTML = 'Your guess is too high';
  }
  else if (parseInt(guess) < randomNumber){
    lastGuess.innerHTML = 'Your guess is too low';
  }
  else {
    lastGuess.innerHTML =  'Invalid entry';
  }
}

document.write('<p>Current range: ' + min + ' - ' + max + '</p>');
