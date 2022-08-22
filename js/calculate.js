document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerAmount = getInputElementById('per-player-input-field');
    const selectedPlayerNumber = getSpanElementById('selected-Player');
    const playerExpensesElement = document.getElementById('player-expense');
    const selectedPlayerExpenses = perPlayerAmount * selectedPlayerNumber;
    if(typeof perPlayerAmount !== "number"){
        return;
    } else {
        playerExpensesElement.innerText = selectedPlayerExpenses;
    }
})