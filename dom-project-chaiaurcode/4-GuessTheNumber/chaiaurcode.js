let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector(".resultParas");

const  p  = document.createElement('p');
p.style.backgroundColor = "#212121";
p.style.borderRadius = "0.5rem";

// let prevGuess = [];
let numGuess = 1 ;

let PlayGame = true;

if(PlayGame){
    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}


function validateGuess(guess){
    // guess = Number(guess);
    if(isNaN(guess)){
        displayMesseges("Invalid Input");
    }else if (guess > 100 || guess <= 0){
        displayMesseges("Enter a number between 1 - 100");
    }else{
        // prevGuess.push(guess);
        displayGuess(guess);
        if(numGuess == 11){
            displayMesseges(`Game Over ! The number was ${randomNumber}`);
            endGame();
        }else{
            // displayGuess(guess)
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMesseges("You Guess was right ");
        endGame();
    }else if(guess < randomNumber){
        displayMesseges("Guessed number is low");
    }else if (guess > randomNumber){
        displayMesseges("Guessed number is high");
    }
}

function displayGuess(guess){
    // userInput.value = "";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}
function displayMesseges(message){
    userInput.value = "";
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e)=> {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        PlayGame = true;
    });

}
function endGame(){
    PlayGame = false;
    userInput.value = "";
    userInput.setAttribute("disabled",'');  
    p.classList.add('button');
    p.innerHTML =`<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    newGame();
}