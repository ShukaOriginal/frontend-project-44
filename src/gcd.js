import readlineSync from 'readline-sync';

const gcdGame = (usernane) => {
  console.log('Find the greatest common divisor of given numbers.');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
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
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.`
      );
      console.log(`Let's try again, ${usernane}!`);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default gcdGame;
