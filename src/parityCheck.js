import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';

const parityChek = (usernane) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = randInt(100);
    const parity = number % 2 === 0;

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && parity) || (answer === 'no' && !parity)) {
      winScore += 1;
      console.log('Correct!');
    } else {
      // prettier-ignore
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${usernane}!`);
      break;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default parityChek;
