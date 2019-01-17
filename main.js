sessionStorage.setItem("minNum", 1);
sessionStorage.setItem("maxNum", 100);
sessionStorage.setItem("randNum", Math.floor(Math.random() * 100 ) + 1)

function aRange(){
  let minIn = document.getElementById('minRange').value || 1;
  let maxIn = document.getElementById('maxRange').value || 100;
  sessionStorage.setItem("minNum", minIn);
  sessionStorage.setItem("maxNum", maxIn);
  sessionStorage.setItem("randNum", Math.floor(Math.random() * maxIn ) + minIn)
  currentRange.innerHTML = ('Current range: ' + minIn + ' - ' + maxIn);
}

function aGuess(){
  let min = sessionStorage.getItem("minNum");
  let max = sessionStorage.getItem("maxNum");
  let randomNumber = sessionStorage.getItem("randNum");
  var guess = document.getElementById('guessInput').value;
  lastGuess.innerHTML = guess;

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
    result.innerHTML =  'Invalid entry';
  }
}

function aClear(){
  document.getElementById('guessInput').value = '';
}

function aReset() {
  sessionStorage.clear();
  location.reload();
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
