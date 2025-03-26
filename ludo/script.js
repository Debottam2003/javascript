const rollDiceButton = document.getElementById('rollDice');
const diceResult = document.getElementById('diceResult');

rollDiceButton.addEventListener('click', () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceResult.innerText = `Result: ${diceValue}`;
    
    // Add movement logic here (example logic)
    movePlayer('red', diceValue);
});

function movePlayer(player, steps) {
    console.log(`${player} moves ${steps} steps.`);
    // Add logic for updating token position here
}
