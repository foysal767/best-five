function getInputElementById(element){
    const elementInputField = document.getElementById(element);
    const elementFieldString = elementInputField.value;
    if(isNaN(elementFieldString)){
        alert(elementFieldString + ' is not a valid number!!!');
    } else if(elementFieldString === ''){
        alert('Please Filled all Empty Field!!!');
    } else {
        const elementFieldNumber = parseInt(elementFieldString);
        if(elementFieldNumber < 0){
            alert(elementFieldNumber + ' is a negative Number!!!');
        } else {
            return elementFieldNumber;
        }
    }
}
function getSpanElementById(element){
    const elementInputField = document.getElementById(element);
    const elementFieldString = elementInputField.innerText;
    const elementFieldNumber = parseInt(elementFieldString);
    return elementFieldNumber;
}