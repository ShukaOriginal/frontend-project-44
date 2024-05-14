import readlineSync from 'readline-sync';

const progression = (usernane) => {
  console.log('What number is missing in the progression?');
  let winScore = 0;

  for (let i = 0; i < 3; i += 1) {
    const massiv = new Array(10);
    const number1 = Math.floor(Math.random() * 100) + 1;
    const interval = Math.floor(Math.random() * 10) + 1;
    const empty = Math.floor(Math.random() * 10);
    massiv[0] = number1;

    for (let j = 1; j < massiv.length; j += 1) {
      massiv[j] = massiv[j - 1] + interval;
    }
    const numberToFind = massiv[empty];
    massiv[empty] = '..';

    console.log(`Question: ${massiv.join(' ')}`);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === numberToFind) {
      console.log('Correct!');
      winScore += 1;
    } else {
      // prettier-ignore
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberToFind}'.`);
      console.log(`Let's try again, ${usernane}!`);
      return;
    }
  }
  if (winScore >= 3) {
    console.log(`Congratulations, ${usernane}!`);
  }
};

export default progression;
