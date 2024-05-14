import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

function preparation() {
  const number = randInt(100);
  const parity = number % 2 === 0;
  return [number, parity];
}

const parityChek = (usernane) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const massiv = preparation();

    console.log(`Question: ${massiv[0]}`);

    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && massiv[1]) || (answer === 'no' && !massiv[1])) {
      winScore += 1;
      console.log('Correct!');
    } else {
      wrongAnswerF(answer, answer === 'yes' ? 'no' : 'yes', usernane);
      break;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default parityChek;
