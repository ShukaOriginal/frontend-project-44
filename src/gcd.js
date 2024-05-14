import readlineSync from 'readline-sync';
import randInt from './randomGenerated.js';
import wrongAnswerF from './wrongAnswer.js';

const gcdGame = (username) => {
  console.log('Find the greatest common divisor of given numbers.');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = randInt(100);
    const number2 = randInt(100);
    let gcd = 0;
    for (let j = 1; j <= number1 && j <= number2; j += 1) {
      if (number1 % j === 0 && number2 % j === 0) {
        gcd = j;
      }
    }
    console.log(`Question: ${number1} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === gcd) {
      console.log('Correct!');
      winScore += 1;
    } else {
      // prettier-ignore
      //console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.`);
      //console.log(`Let's try again, ${username}!`);
      wrongAnswerF(answer, gcd, username);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gcdGame;
