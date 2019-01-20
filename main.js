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
  result.innerHTML = feedback;
}

function evalGuess(guess, winner) {
  if ( guess === winner ) {
    levelUp();
    randNum = getRandom();
    return 'BOOM! Range LevelUp!';
  }
  else if ( guess > winner ){ return 'That is too high' + ' hint:' + randNum; }
  else if ( guess < winner ){ return 'That is too low' + ' hint:' + randNum; }
  else { return 'Invalid entry'; }
}

function levelUp(){
  let delta = 10
  minNum = (minNum - delta);
  maxNum = (maxNum + delta);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' - ' + maxNum );
}

function getRandom() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

function handleChange(input) {
  let checkVal = parseInt(input.value)
  if ( checkVal < minNum ) { lastNote.innerHTML = 'INPUT TOO LOW'; }
  else if (checkVal > maxNum ) { lastNote.innerHTML = 'INPUT TOO HIGH'; }
  else { lastNote.innerHTML = 'Good guess'; }
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
