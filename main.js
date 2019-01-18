var minNum = 1;
var maxNum = 100;
var randNum = getRandom();

function aRange(){
  minNum = document.getElementById('minRange').value || minNum;
  maxNum = document.getElementById('maxRange').value || maxNum;
  randNum = getRandom();
}

function aGuess(){
  let guess = parseInt(document.getElementById('guessInput').value);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
  lastGuess.innerHTML = guess;
  enableBtn("resetBtn"); enableBtn("clearBtn");
  let feedback = evalGuess(guess, randNum);
  result.innerHTML = feedback;
}

function evalGuess(guess, winner) {
  if ( guess === winner ) { return 'BOOM!'; }
  else if ( guess > winner ){ return 'Your guess is too high'; }
  else if ( guess < winner ){ return 'Your guess is too low'; }
  else { return 'Invalid entry'; }
}

function getRandom() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

function handleChange(input) {
  if (input.value < minNum ) {lastNote.innerHTML = 'Input too low ' + minNum;
    document.getElementById('guessInput').value = '';
  }
  else if (input.value > maxNum ) {lastNote.innerHTML = 'Input too high ' + maxNum;
    document.getElementById('guessInput').value = '';
  }
  else {lastNote.innerHTML = 'Good guess';
  }
}

function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

function aClear(){
  document.getElementById('guessInput').value = '';
}

function aReset() {
  location.reload();
}
