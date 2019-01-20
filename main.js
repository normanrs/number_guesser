// establishing game startup variables
var minNum = 1;
var maxNum = 100;
var randNum = getRandom();

// changing range based on user input
function aRange(){
  // allows for user to only enter one number leaving the other untouched
  minNum = parseInt(document.getElementById('minRange').value) || minNum;
  maxNum = parseInt(document.getElementById('maxRange').value) || maxNum;
  // updates random number
  randNum = getRandom();
  // reports back the new range
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
}

// enters a user guess
function aGuess(){
  // enters the guess and formats as a integer
  let guess = parseInt(document.getElementById('guessInput').value);
  // updates the current range in case there was a change
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
  // reports the user's guess
  lastGuess.innerHTML = guess;
  // allows user to clear their guess or reset the game
  enableBtn("resetBtn"); enableBtn("clearBtn");
  // calls to evaluate the guess and report result
  let feedback = evalGuess(guess, randNum);
  result.innerHTML = feedback;
}

// helper function to evaluate guesses against winning number
// decided to pass both in as variables to ensure both are always up-to-date
function evalGuess(guess, winner) {
  // if guess is equal to winning number
  if ( guess === winner ) {
    levelUp();
    randNum = getRandom();
    return 'BOOM! Range LevelUp!';
  }
  // if guess isn't equal to winning number
  else if ( guess > winner ){ return 'That is too high ' + randTry(); }
  else if ( guess < winner ){ return 'That is too low ' + randTry(); }
  // if none of the above were true something must have gone wrong
  else { return 'Invalid entry'; }
}

// expand the range on a winning guess
function levelUp(){
  // figured I would make this a variable in case I wanted to change it later
  let delta = 10
  // subtract delta from bottom of range
  minNum = (minNum - delta);
  // add delta to top of range
  maxNum = (maxNum + delta);
  // report the new range
  currentRange.innerHTML = ( 'Current range: ' + minNum + ' to ' + maxNum );
}

// returns a random number within the set range
// might be better to pass in max and min
function getRandom() {
  return parseInt(Math.random() * ( maxNum - minNum ) + minNum );
}

// checks guesses against current range as they are being entered
function handleChange(input) {
  // get input value and turn into integer
  let checkVal = parseInt(input.value)
  // check if it's too low
  if ( checkVal < minNum ) { lastNote.innerHTML = 'INPUT TOO LOW'; }
  // check if it's too high
  else if (checkVal > maxNum ) { lastNote.innerHTML = 'INPUT TOO HIGH'; }
  // must be ok
  else { lastNote.innerHTML = 'accepted'; }
}

// wanted to display random number for testing the game
// decided to make it fun with a variety of feedback!
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
  // return the current random number with a hint expression chosen at random
  return '(' + randNum + trySynonym[Math.floor(Math.random() * trySynonym.length)] + ')'
}

// turn off a button
function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

// turn on a button
function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

// clear the guess input
function aClear(){
  document.getElementById('guessInput').value = '';
}

// reset the game/page
function aReset() {
  location.reload();
}
