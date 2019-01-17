sessionStorage.setItem("minNum", 1);
sessionStorage.setItem("maxNum", 100);
sessionStorage.setItem("randNum", getRandom());

function aRange(){
  sessionStorage.setItem("minNum", (document.getElementById('minRange').value) || 1);
  sessionStorage.setItem("maxNum", (document.getElementById('maxRange').value) || 100);
  sessionStorage.setItem("randNum", getRandom());
}

function aGuess(){
  let min = parseInt(sessionStorage.getItem("minNum"));
  let max = parseInt(sessionStorage.getItem("maxNum"));
  let randomNumber = parseInt(sessionStorage.getItem("randNum"));
  var guess = parseInt(document.getElementById('guessInput').value);
  currentRange.innerHTML = ('Current range: ' + min + ' - ' + max);
  lastGuess.innerHTML = guess;
  // alert(max);
  enableBtn("resetBtn");
  enableBtn("clearBtn");

  if ( guess === randomNumber ) {
    result.innerHTML = 'BOOM!';
  }
  else if ( guess > randomNumber){
    result.innerHTML = 'Your guess is too high' + randomNumber;
  }
  else if ( guess < randomNumber){
    result.innerHTML = 'Your guess is too low' + randomNumber;
  }
  else {
    result.innerHTML = 'Invalid entry';
  }
}

function getRandom() {
  let min = parseInt(sessionStorage.getItem("minNum"));
  let max = parseInt(sessionStorage.getItem("maxNum"));
  return parseInt(Math.random() * (max - min) + min);
}

function handleChange(input) {
  let min = sessionStorage.getItem("minNum");
  let max = sessionStorage.getItem("maxNum");
  if (input.value < min.value ) {lastNote.innerHTML = 'Input too low ' + min;
    document.getElementById('guessInput').value = '';
  }
  else if (input.value > max.value ) {lastNote.innerHTML = 'Input too high ' + max;
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
  sessionStorage.clear();
  location.reload();
}
