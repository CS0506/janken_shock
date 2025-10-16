const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultMessage = document.getElementById('result-message');
const computerChoiceDisplay = document.getElementById('computer-choice');
const cookingSuggestion = document.getElementById('cooking-suggestion');

const choices = ['rock', 'paper', 'scissors'];
const choiceText = {
    rock: 'グー',
    paper: 'パー',
    scissors: 'チョキ'
};

const cookingIdeas = ['カレー', '肉じゃが', '親子丼', 'とんかつ', '唐揚げ', 'ハンバーグ', 'オムライス'];

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    computerChoiceDisplay.textContent = `コンピュータの手: ${choiceText[computerChoice]}`;
    cookingSuggestion.textContent = ''; // Clear previous suggestion

    if (playerChoice === computerChoice) {
        resultMessage.textContent = '引き分け！もう一回！';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage.textContent = 'あなたの勝ち！外食だ！';
    } else {
        resultMessage.textContent = 'あなたの負け...自炊しましょう。';
        const randomDish = cookingIdeas[Math.floor(Math.random() * cookingIdeas.length)];
        cookingSuggestion.textContent = `挑戦すべき料理: ${randomDish}`;
    }
}
