import readlineSync from 'readline-sync';

const progression = (usernane) => {
    console.log('What number is missing in the progression?');
    let winScore = 0;

    for (let i = 0; i < 3; i++){
        var massiv = new Array (10);
        let number1 = Math.floor(Math.random() * 100) + 1;
        let interval = Math.floor(Math.random() * 10) + 1;
        let empty = Math.floor(Math.random() * 10);
        massiv[0] = number1;

        for (let i = 1; i < massiv.length; i++) {
            massiv[i] = massiv[i - 1] + interval;
        }
        const numberToFind = massiv[empty];
        massiv[empty] = '..'

        console.log(`Question: ${massiv.join(' ')}`);

        const answer = Number(readlineSync.question('Your answer: '));
        
        if (answer == numberToFind){
            console.log('Correct!');
            winScore = winScore + 1;
        }else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberToFind}'.`);
            console.log(`Let's try again, ${usernane}!`);
            return;
        }
    }
    if (winScore >= 3) {
        console.log(`Congratulations, ${usernane}!`);
    }
}

export default progression;