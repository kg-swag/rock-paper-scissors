//generates rock, paper, or scissor
function getComputerChoice(){

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;    }

    let n = randomNumber(1,3);

    switch(n){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}


function getHumanChoice(){
    const rock = document.querySelector("#rock")
    const paper = document.querySelector("#paper")
    const scissors = document.querySelector("#scissors")

    rock.addEventListener("click", () => {
        playGame("Rock");
    });

    paper.addEventListener("click", () => {
        playGame("Paper");
    });

    scissors.addEventListener("click", () => {
        playGame("Scissors");
    });
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice){
    const result = document.querySelector("#result")
    const score = document.querySelector("#score")
    const winLose = document.querySelector("#winLose")

    function displayMessage(message){
        result.innerHTML = message
        score.innerHTML = `Your score: ${humanScore}. Computer score: ${computerScore}`
    }
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice == "Paper" && computerChoice == "Paper"){
            const message = "Tie! Paper and Paper.";
            displayMessage(message);


        } else if (humanChoice == "Rock" && computerChoice == "Rock"){
            const message = "Tie! Rock and Rock.";
            displayMessage(message);



        } else if (humanChoice == "Scissors" && computerChoice == "Scissors"){
            const message = "Tie! Scissors and Scissors.";
            displayMessage(message);



        } else if (humanChoice == "Paper" && computerChoice == "Rock"){
            humanScore++
            const message = "You win this round! Paper beats Rock.";
            displayMessage(message);



        } else if (humanChoice == "Rock" && computerChoice == "Scissors"){
            humanScore++
            const message = "You win this round! Rock beats Scissors."
            displayMessage(message);



        } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
            humanScore++
            const message = "You win this round! Scissors beats Paper."
            displayMessage(message);



        } else if (humanChoice == "Paper" && computerChoice == "Scissors"){
            computerScore++
            const message = "You lose this round! Scissors beats Paper."
            displayMessage(message);



        }  else if (humanChoice == "Rock" && computerChoice == "Paper"){
            computerScore++
            const message = "You lose this round! Paper beats Rock."
            displayMessage(message);



        }   else if (humanChoice == "Scissors" && computerChoice == "Rock"){
            computerScore++
            const message = "You lose this round! Rock beats Scissors."
            displayMessage(message);
        }
    }

    if ((computerScore < 5) && (humanScore < 5)){
        playRound(humanChoice, getComputerChoice());
    } else if (computerScore == 5){
        winLose.innerHTML = "You lose!"
    } else if (humanScore == 5){
        winLose.innerHTML = "You win!"
    }
}

getHumanChoice()