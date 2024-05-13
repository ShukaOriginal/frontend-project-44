import readlineSync from 'readline-sync';

const prime_game = (usernane) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let winScore = 0;

    for (let i = 0; i < 3; i++){
        let number = Math.floor(Math.random() * 100) + 1;
        let correctAnawer = "";

        console.log(`Question: ${number}`);

        if (primality(number)){
            correctAnawer = 'yes'
        }else{
            correctAnawer = 'no'
        }

        const answer = readlineSync.question('Your answer: ');
        
        if (answer == correctAnawer){
            console.log('Correct!');
            winScore = winScore + 1;
        }else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnawer}'.`);
            console.log(`Let's try again, ${usernane}!`);
            return;
        }
    }
    if (winScore >= 3) {
        console.log(`Congratulations, ${usernane}!`);
    }
}

function primality(n) {
    for(let i = 2; i < n; i++) {
       if(n % i === 0) return false;
    }
    return n > 1;
   }

export default prime_game;