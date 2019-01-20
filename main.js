var minNum = 1;
var maxNum = 100;
var randNum = getRandom();

function aRange(){
  minNum = parseInt(document.getElementById('minRange').value) || minNum;
  maxNum = parseInt(document.getElementById('maxRange').value) || maxNum;
  randNum = getRandom();
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
}


function aGuess(){
  let guess = parseInt(document.getElementById('guessInput').value);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
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
  else if ( guess > winner ){ return 'That is too high ' + randTry(); }
  else if ( guess < winner ){ return 'That is too low ' + randTry(); }
  else { return 'Invalid entry'; }
}

function levelUp(){
  let delta = 10
  minNum = (minNum - delta);
  maxNum = (maxNum + delta);
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
}

function getRandom() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

function handleChange(input) {
  let checkVal = parseInt(input.value)
  if ( checkVal < minNum ) { lastNote.innerHTML = 'INPUT TOO LOW'; }
  else if (checkVal > maxNum ) { lastNote.innerHTML = 'INPUT TOO HIGH'; }
  else { lastNote.innerHTML = 'accepted'; }
}

function randTry() {
  const trySynonym = [' is worth a try..',
             ' would be an attempt..',
             ' is go..',
             ' is the struggle..',
             ' might work out..',
             ' is looking good..',
             ' would suffice..',
             ' probably wins..',
             ' is money..',
             ' does the trick..',
             ' floats my boat..',
             ' gets the job done..',
             ' is sensational..',
             " that's the ticket..",
             ' esta bien..',
             ' might succeed..',
             ' would not be crazy..',
             ' and you have it..'
           ];
  return '(' + randNum + trySynonym[Math.floor(Math.random() * trySynonym.length)] + ')'
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
