import readlineSync from 'readline-sync';

const gcd_game = (usernane) => {
  console.log('Find the greatest common divisor of given numbers.');
  let winScore = 0;

  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * 100) ++;
    const number2 = Math.floor(Math.random() * 100) ++;
    let gcd = 0;
    for (let j = 1; j <= number1 && j <= number2; j++) {
      if (number1 % j === 0 && number2 % j === 0) {
        gcd = j;
      }
    }
    console.log(`Question: ${number1} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer === gcd) {
      console.log('Correct!');
      winScore++;
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

export default gcd_game;
