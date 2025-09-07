let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};

updateScores();

function playGame(choice) {
    const computerChoice = computerGuess();
    let result = '';

    if (computerChoice === 'Rock') {
        if (choice === 'Rock') {
            result = 'Tie';
        } else if (choice === 'Paper') {
            result = 'You win';
        } else {
            result = 'You lose';
        }
    } else if (computerChoice === 'Paper') {
        if (choice === 'Rock') {
            result = 'You lose';
        } else if (choice === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You win';
        }
    } else {
        if (choice === 'Rock') {
            result = 'You win';
        } else if (choice === 'Paper') {
            result = 'You lose';
        } else {
            result = 'Tie';
        }
    }

    document.querySelector('.js-button-moves').innerHTML = `You <img src="Assets/${choice}-emoji.png" class="image-icon"> <img src="Assets/${computerChoice}-emoji.png" class="image-icon"> Computer`;
    document.querySelector('.js-button-result').innerHTML = result;

    return result;
}

function computerGuess() {
    let random = Math.random();
    let computerChoice = '';
    if (random < 1 / 3) {
        computerChoice = 'Rock';
    } else if (random >= 1 / 3 && random < 2 / 3) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    return computerChoice;
}

function scores(choice) {
    let result = playGame(choice);
    if (result === 'You win') {
        score.win++;
    } else if (result === 'You lose') {
        score.lose++;
    } else {
        score.tie++;
    }
    updateScores();
    localStorage.setItem('score', JSON.stringify(score));
}

function updateScores() {
    document.querySelector('.js-button-score').innerHTML = `Wins: ${score.win},  Lose: ${score.lose},  Tie: ${score.tie}`;
}