import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

function primality(n) {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

const primeGame = (usernane) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const number = randInt(100);
    let correctAnawer = '';

    console.log(`Question: ${number}`);

    if (primality(number)) {
      correctAnawer = 'yes';
    } else {
      correctAnawer = 'no';
    }

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnawer) {
      console.log('Correct!');
      winScore += 1;
    } else {
      // prettier-ignore
      //console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnawer}'.`);
      //console.log(`Let's try again, ${usernane}!`);
      wrongAnswerF(answer, correctAnawer, usernane);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default primeGame;
