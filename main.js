var minNum = 1;
var maxNum = 100;
var randNum = getRandom();

function aRange(){
  minNum = parseInt(document.getElementById('minRange').value) || minNum;
  maxNum = parseInt(document.getElementById('maxRange').value) || maxNum;
  randNum = getRandom();
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
}

function aGuess(){
  let guess = parseInt(document.getElementById('guessInput').value);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
  lastGuess.innerHTML = guess;
  enableBtn("resetBtn"); enableBtn("clearBtn");
  let feedback = evalGuess(guess, randNum);
  result.innerHTML = feedback + ' hint:' + guess + ' ' + randNum + ' ' + minNum + ' ' + maxNum;
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
  let checkVal = parseInt(input.value)
  if (checkVal < minNum ) {lastNote.innerHTML = 'Input too low ';
    document.getElementById('guessInput').value = null;
  }
  else if (checkVal > maxNum ) {lastNote.innerHTML = 'Input too high ';
    document.getElementById('guessInput').value = null;
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
