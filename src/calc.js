import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

const calcGame = (username) => {
  console.log('What is the result of the expression?');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
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

    console.log(`Question: ${number1} ${signChar} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      winScore += 1;
    } else {
      wrongAnswerF(answer, correctAnswer, username);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default calcGame;
