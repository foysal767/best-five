function getInputElementById(elementId){
    const elementInputField = document.getElementById(elementId);
    const elementFieldString = elementInputField.value;
    if(isNaN(elementFieldString)){
        alert(elementFieldString + ' is not a valid number!!!');
    } else if(elementFieldString === ''){
        alert('Please Filled all Empty Field!!!');
    } else {
        const elementFieldNumber = parseInt(elementFieldString);
        if(elementFieldNumber < 0){
            alert(elementFieldNumber + ' is a negative Number!!!');
        } else if(elementFieldNumber == 0){
            alert('Amount must be enter more than 0!!!')
        } else {
            return elementFieldNumber;
        };
    };
}
function getSpanElementById(elementId){
    const elementInputField = document.getElementById(elementId);
    const elementFieldString = elementInputField.innerText;
    const elementFieldNumber = parseInt(elementFieldString);
    return elementFieldNumber;
}