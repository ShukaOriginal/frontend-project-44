import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

function preparation() {
  const number1 = randInt(100);
  const number2 = randInt(100);
  const sign = randInt(3) % 3;
  let correctAnswer = 0;
  let signChar = '';
  if (sign === 0) {
    correctAnswer = number1 + number2;
    signChar = '+';
  } else if (sign === 1) {
    correctAnswer = number1 - number2;
    signChar = '-';
  } else if (sign === 2) {
    correctAnswer = number1 * number2;
    signChar = '*';
  }
  return [number1, number2, signChar, correctAnswer];
}

const calcGame = (username) => {
  console.log('What is the result of the expression?');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const massiv = preparation();

    console.log(`Question: ${massiv[0]} ${massiv[2]} ${massiv[1]}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === massiv[3]) {
      console.log('Correct!');
      winScore += 1;
    } else {
      wrongAnswerF(answer, massiv[3], username);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default calcGame;
