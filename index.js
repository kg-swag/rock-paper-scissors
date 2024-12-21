console.log("Hello World")


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
    let choice = prompt("Choose rock, paper, or scissors");

    if (choice.toLowerCase() == "rock"){
        return "Rock";
    } else if (choice.toLowerCase() == "paper"){
        return "Paper";
    } else if (choice.toLowerCase() == "scissors"){
        return "Scissors";
    } else {
        return "Please choose between rock, paper, or scissors";
    }
}


function playGame(){
    let humanScore = 0
    let computerScore = 0
    console.log('test')
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice == "Paper" && computerChoice == "Paper"){
            console.log("Tie! Paper and Paper. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Rock" && computerChoice == "Rock"){
            console.log("Tie! Rock and Rock. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Scissors" && computerChoice == "Scissors"){
            console.log("Tie! Scissors and Scissors. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Paper" && computerChoice == "Rock"){
            humanScore++
            console.log("You Win! Paper beats Rock. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Rock" && computerChoice == "Scissors"){
            humanScore++
            console.log("You Win! Rock beats Scissors. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Scissors" && computerChoice == "Paper"){
            humanScore++
            console.log("You Win! Scissors beats Paper. Your Score: " + humanScore + " Computer Score: " + computerScore)

        } else if (humanChoice == "Paper" && computerChoice == "Scissors"){
            computerScore++
            console.log("You Lose! Scissors beats Paper. Your Score: " + humanScore + " Computer Score: " + computerScore)

        }  else if (humanChoice == "Rock" && computerChoice == "Paper"){
            computerScore++
            console.log("You Lose! Paper beats Rock. Your Score: " + humanScore  + " Computer Score: " + computerScore)

        }   else if (humanChoice == "Scissors" && computerChoice == "Rock"){
            computerScore++
            console.log("You Lose! Rock beats Scissors. Your Score: " + humanScore + " Computer Score: " + computerScore)
        } 
    }

    while (humanScore < 5 && computerScore < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection)
        console.log(computerSelection)

        playRound(humanSelection, computerSelection)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame()