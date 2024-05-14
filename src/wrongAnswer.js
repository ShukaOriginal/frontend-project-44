export default (answer, correctAnswer, name) => {
  // prettier-ignore
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return;
};
