const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultMessage = document.getElementById('result-message');
const computerChoiceIcon = document.getElementById('computer-choice-icon');

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const retryButton = document.getElementById('retry-button');
const retryButtonGame = document.getElementById('retry-button-game');

const choices = ['rock', 'paper', 'scissors'];
const choiceMap = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

// Event Listeners
startButton.addEventListener('click', startGame);
retryButton.addEventListener('click', startGame);
retryButtonGame.addEventListener('click', startGame);

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function startGame() {
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    retryButtonGame.classList.add('hidden');
    resultMessage.textContent = '';
    computerChoiceIcon.textContent = '';
}

const resultDiv = document.getElementById('result');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Animation
    resultDiv.classList.remove('result-anim');
    void resultDiv.offsetWidth; // Trigger reflow
    resultDiv.classList.add('result-anim');

    computerChoiceIcon.textContent = choiceMap[computerChoice] + ' (👁💋👁)';
    retryButtonGame.classList.add('hidden');

    if (playerChoice === computerChoice) {
        resultMessage.textContent = 'あいこ！もう一回！';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = 'あなたの勝ち！';
        // Wait a bit before showing the final screen to let the user see the result
        setTimeout(showResultScreen, 1000);
    } else {
        resultMessage.textContent = 'あなたの負け...';
        retryButtonGame.classList.remove('hidden');
    }
}

function showResultScreen() {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}
