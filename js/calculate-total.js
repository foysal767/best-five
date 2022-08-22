document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerExpense = getInputElementById('manager-input-field');
    const coachExpense = getInputElementById('coach-input-field');
    const playerExpenses = getSpanElementById('player-expense');
    const totalExpensesElement = document.getElementById('total-expense');
    const totalExpenses = managerExpense + coachExpense + playerExpenses;
    totalExpensesElement.innerText = totalExpenses;
})