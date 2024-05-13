import readlineSync from 'readline-sync';

const calc_game = (usernane) => {
  console.log('What is the result of the expression?');
  let winScore = 0;

  for (let i = 0; i < 3; i++) {
    let number1 = Math.floor(Math.random() * 100) + 1;
    let number2 = Math.floor(Math.random() * 100) + 1;
    let sign = Math.floor(Math.random() * 10) % 3;
    let correctAnswer = 0;
    let signChar = '';
    if (sign == 0) {
      correctAnswer = number1 + number2;
      signChar = '+';
    } else if (sign == 1) {
      correctAnswer = number1 - number2;
      signChar = '-';
    } else if (sign == 2) {
      correctAnswer = number1 * number2;
      signChar = '*';
    }

    console.log(`Question: ${number1} ${signChar} ${number2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (answer == correctAnswer) {
      console.log('Correct!');
      winScore = winScore + 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${usernane}!`);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default calc_game;
