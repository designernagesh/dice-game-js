let btnRollDice = document.querySelector(".btnRollDice"),
    result = document.querySelector(".result"),
    playerOneDiceOne = document.querySelector(".playerOneDiceOne"),
    playerOneDiceTwo = document.querySelector(".playerOneDiceTwo"),

    playerTwoDiceOne = document.querySelector(".playerTwoDiceOne"),
    playerTwoDiceTwo = document.querySelector(".playerTwoDiceTwo");

btnRollDice.addEventListener('click', () => {
    let diceOnePlayerOne = Math.floor(Math.random() * 6) + 1;
    let diceTwoPlayerOne = Math.floor(Math.random() * 6) + 1;

    let diceOnePlayerTwo = Math.floor(Math.random() * 6) + 1;
    let diceTwoPlayerTwo = Math.floor(Math.random() * 6) + 1;

    playerOneDiceOne.src = `images/dice${diceOnePlayerOne}.png`;
    playerOneDiceTwo.src = `images/dice${diceTwoPlayerOne}.png`;

    playerTwoDiceOne.src = `images/dice${diceOnePlayerTwo}.png`;
    playerTwoDiceTwo.src = `images/dice${diceTwoPlayerTwo}.png`;

    let playerOneTotal = diceOnePlayerOne + diceTwoPlayerOne;
    let playerTowTotal = diceOnePlayerTwo + diceTwoPlayerTwo;

    if(playerOneTotal > playerTowTotal){
        result.innerHTML = "Player One Won";
    } else if(playerOneTotal == playerTowTotal){
        result.innerHTML = "Match Draw!";
    } else{
        result.innerHTML = "Player Two Won";
    }
})