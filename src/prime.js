import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

function primality(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

function preparation() {
  const number = randInt(100);
  let correctAnswer = '';
  if (primality(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [number, correctAnswer];
}

const primeGame = (usernane) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const massiv = preparation();

    console.log(`Question: ${massiv[0]}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === massiv[1]) {
      console.log('Correct!');
      winScore += 1;
    } else {
      wrongAnswerF(answer, massiv[1], usernane);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default primeGame;
