let attempts = 0; // attempts counter
let randomNumber = Math.floor(Math.random() * 100 + 1); // random number from 1-100
let gameOver  = false;

// variables for guess and submit elements
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
// get all number images
const numberImages = document.querySelectorAll(".numbers img");

//Event Listener
document.addEventListener("keydown", function(e){
    // if user presses enter
    if (e.key === "Enter"){
        submit.click(); // trigger a click action
    }
});
submit.addEventListener("click", function() {
// if the game is not over check the guess
if (!gameOver){
    checkGuess();

}
// if the game is over reset
else{
    startOver();
}
});

// checks the user's guess against the random num
function checkGuess(){
    // store the value of guess input in userValue
    const userValue = Number(guess.value);
    attempts++;
     if(userValue === randomNumber){
        gameOver = true;
        hint.textContent = "Congratulations! YOU WIN!";
        attemptsText.textContent = "Attempts: "+ attempts;
        celebrate(2);
        submit.textContent = "Again?";

     }
     else if (userValue > randomNumber){
        hint.textContent = "Too High..";
     }
     else{
        hint.textContent = "Too Low...";
     }
}

function celebrate(seconds){
    const duration = seconds*1000;
    const end = Date.now() + duration;

    (function frame() {
        // confetti bursts across the screen
        confetti({
          particleCount: 8,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 8,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
    
        // continue until time is up
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
    })();
}

// reset everything for another game
function startOver(){
    attempts = 0; // attempts counter
    randomNumber = Math.floor(Math.random() * 100 + 1); // random number from 1-100
    gameOver  = false;
    
    hint.textContent = "";
    guess.value = "";
    submit.textContent = "submit";
    attemptsText.textContent = "";    


}


