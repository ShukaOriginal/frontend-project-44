import readlineSync from 'readline-sync';



const parityChek = (usernane) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let winScore = 0;

    for (let i = 0; i < 3; i++){
        let number = Math.floor(Math.random() * 100) + 1;
        let parity = number % 2 == 0 ? true : false;

        console.log(`Question: ${number}`);

        const answer = readlineSync.question('Your answer: ');

        if (answer == 'yes' && parity || answer == 'no' && !parity){
            winScore = winScore + 1;
            console.log('Correct!');
        }
        if (answer == 'no' && parity || answer == 'yes' && !parity){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer == 'yes' ? `no` : `yes`}'.`);
            console.log(`Let's try again, ${usernane}!`);
            break;
        }
    }
    if (winScore >= 3){
        console.log(`Congratulations, ${usernane}!`);
    }
}

export default parityChek;