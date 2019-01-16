var min = 1
var max = 100

function aMin(){
  var min = document.getElementById('min').value;
}

function aMax(){
  var max = document.getElementById('max').value;
}

var randomNumber = Math.floor(Math.random() * max ) + min;

function aGuess(){
  var guess = document.getElementById('guessInput').value;
  lastGuess.innerHTML = guess;

  if (parseInt(guess) === randomNumber ) {
    result.innerHTML = 'BOOM!';
  }
  else if (parseInt(guess) > randomNumber){
    result.innerHTML = 'Your guess is too high';
  }
  else if (parseInt(guess) < randomNumber){
    result.innerHTML = 'Your guess is too low';
  }
  else {
    result.innerHTML =  'Invalid entry';
  }
}

function aClear(){
  document.getElementById('guessInput').value = '';
}

function aReset() {
  location.reload();
}

function handleChange(input) {
    if (input.value < 0) {lastNote.innerHTML = 'Input too low';
      document.getElementById('guessInput').value = '';
    }
    if (input.value > 100) {lastNote.innerHTML = 'Input too high';
      document.getElementById('guessInput').value = '';
    }
  }

document.write('<p>Current range: ' + min + ' - ' + max + '</p>');
