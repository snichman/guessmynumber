'use strict';

const score = document.querySelector('.score');
let scoreNumber = 20;
let heightScore = 0;

let heigh = document.querySelector('.highscore');

const guess = document.querySelector('.guess');

const message = document.querySelector('.message');

let number = Math.trunc(Math.random() * 20 + 1);
console.log(number);

// check method that checked if the secret number is same as the guess number.

document.querySelector('.check').addEventListener('click', () => {
  // if the guess number less than 1
  if (!Number(guess.value)) {
    message.textContent = 'not a number';

    // if the guess number equal to secret number
  } else if (guess.value == number) {
    document.querySelector('.number').textContent = number;
    message.textContent = 'right guess';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    // if the score number bigger than heighscore
    if (scoreNumber > heightScore) {
      heightScore = scoreNumber;
      heigh.textContent = heightScore;
    }

    // if the guess number bigger than secret number
  } else if (guess.value > number) {
    if (scoreNumber < 1) {
      message.textContent = 'You are lose, start Again';
    } else {
      message.textContent = 'Too Height';
      scoreNumber--;
      score.textContent = scoreNumber;
    }

    // if the guess number less than secret number
  } else if (guess.value < number) {
    if (scoreNumber < 1) {
      message.textContent = 'You are lose, start Again';
    } else {
      message.textContent = 'Too Low';
      scoreNumber--;
      score.textContent = scoreNumber;
    }
  }
});

// reset all except heighscore.
document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  score.textContent = scoreNumber;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  guess.value = '';
});
