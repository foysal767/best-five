const selectArray = [];
const selectBtnAll = document.getElementsByClassName('btn-select');
for(const selectBtn of selectBtnAll){
    selectBtn.addEventListener('click', function(event){
        const selectElement = event.target.parentNode.children[1].innerText;
        const selectedPlayer = document.getElementById('selected-Player');
        if(selectArray.length < 5){
            selectArray.push(selectElement);
            const playerOl = document.getElementById('player-ol');
            const li = document.createElement('li');
            li.innerText = `${selectElement}`
            playerOl.appendChild(li);
            selectedPlayer.innerText = selectArray.length;
            selectBtn.setAttribute('disabled', '');
            selectBtn.style.backgroundColor = '#81e6d9';
            selectBtn.style.color = 'black';
        } else {
            alert('You Cannot Select More Than Five Players!!!');
            return;
        };
    });
}