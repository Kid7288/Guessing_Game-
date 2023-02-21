let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let inputElement = parseInt(userInput.value);
    if (inputElement > randomNumber) {
        gameResult.textContent = "Too High, Try Again!";
        gameResult.style.backgroundColor = "Blue";
    } else if (inputElement < randomNumber) {
        gameResult.textContent = "Too Low, Try Again!";
        gameResult.style.backgroundColor = "Blue";
    } else if (inputElement === randomNumber) {
        gameResult.textContent = "Congratulations! You Got It Right....";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Please, Provide Valid Input Numbers Only..";
        gameResult.style.backgroundColor = "Red";
    }
}