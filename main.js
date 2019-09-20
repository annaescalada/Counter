'use strict';

function main() {
  console.log('hi');

  var STARTING_NUMBER = 30;
  var counter = STARTING_NUMBER;
  var intervalID = setInterval(callback, 1000);

  function callback () {
    paragraph.innerHTML = counter -= 1;
    if (counter === 0) {
      clearInterval(intervalID);
    }
  }

  var paragraph = document.getElementById('counter');
  console.log(paragraph);

  paragraph.innerHTML = STARTING_NUMBER;
}

window.addEventListener('load', main);