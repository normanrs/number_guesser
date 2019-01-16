var randomNumber = Math.floor(Math.random() * 100 ) + 1;

var guess = prompt('I am thinking of a random number between 1 and 100. What is it?');

if (parseInt(guess) === randomNumber ) {

  document.write('<p>BOOM!</p>');

}
else if (parseInt(guess) > randomNumber){

  document.write('<p>That is too high</p>');

}

else {

  document.write('<p>That is too low</p>');

}
