import readlineSync from 'readline-sync';

const gcd_game = (usernane) => {
    console.log('Find the greatest common divisor of given numbers.');
    let winScore = 0;

    for (let i = 0; i < 3; i++) {
        let number1 = Math.floor(Math.random() * 100) + 1;
        let number2 = Math.floor(Math.random() * 100) + 1;
        let gcd = 0;
        for (let i = 1; i <= number1 && i <= number2; i++){
            if (number1 % i == 0 && number2 % i == 0) {
                gcd = i
            }
        }
        console.log(`Question: ${number1} ${number2}`);
        const answer = Number(readlineSync.question('Your answer: '));
        if (answer == gcd) {
            console.log('Correct!');
            winScore = winScore + 1;
        }else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.`);
            console.log(`Let's try again, ${usernane}!`);
            return;
        }
    }
    if (winScore >= 3) {
        console.log(`Congratulations, ${usernane}!`);
    }
}

export default gcd_game;