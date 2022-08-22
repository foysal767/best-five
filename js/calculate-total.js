document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerExpense = getInputElementById('manager-input-field');
    const coachExpense = getInputElementById('coach-input-field');
    const playerExpenses = getSpanElementById('player-expense');
    const totalExpensesElement = document.getElementById('total-expense');
    const totalExpenses = managerExpense + coachExpense + playerExpenses;
    if(typeof managerExpense !== "number" || typeof coachExpense !== "number" || typeof playerExpenses !== "number"){
        return;
    } else {
        totalExpensesElement.innerText = totalExpenses;
    };
})