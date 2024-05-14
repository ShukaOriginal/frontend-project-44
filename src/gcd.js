import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

function preparation() {
  const number1 = randInt(100);
  const number2 = randInt(100);
  let gcd = 0;
  for (let j = 1; j <= number1 && j <= number2; j += 1) {
    if (number1 % j === 0 && number2 % j === 0) {
      gcd = j;
    }
  }
  return [number1, number2, gcd];
}

const gcdGame = (username) => {
  console.log('Find the greatest common divisor of given numbers.');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const massiv = preparation();
    console.log(`Question: ${massiv[0]} ${massiv[1]}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === massiv[2]) {
      console.log('Correct!');
      winScore += 1;
    } else {
      wrongAnswerF(answer, massiv[2], username);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gcdGame;
