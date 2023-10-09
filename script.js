const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const buttons = document.querySelectorAll('button')

let computerChoice
let userChoice
let result

buttons.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
    })
})

function generateComputerChoice(){
    const randomNumber = Math.round(Math.random()*3)+1
    switch (randomNumber) {
        case 1:
            computerChoice = 'Rock'
            computerChoiceDisplay.innerHTML = computerChoice
            break;
        case 2:
            computerChoice = 'Paper'
            computerChoiceDisplay.innerHTML = computerChoice
            break;
        case 3:
            computerChoice = 'Scissors'
            computerChoiceDisplay.innerHTML = computerChoice
            break;
    }
}

function getResult(){
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = "you won!"
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = "you lost!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = "you lost!"
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = "you won!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = "you lost!"
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = "you lost!"
    }

    resultDisplay.innerHTML = result
}