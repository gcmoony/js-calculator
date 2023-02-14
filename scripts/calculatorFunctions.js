let screenInput = document.getElementById("calculator-screen");
let prevInput = null;
let calculateAction = null;
let clearScreen = false;

function showInput(){
    console.log(screenInput.value);
}

function updateInput(input){
    if(clearScreen){
        screenInput.value = 0;
        clearScreen = false;
    }
    if(screenInput.value === "0")
        screenInput.value = input;
    else{
        if(!screenInput.value.includes(".") && input === "." || input != ".")
            screenInput.value += input;
    }
}

function savePrev(){
    prevInput = screenInput.value;
    screenInput.value = 0;
}

function setAction(newAction){
    "+/*-".includes(newAction) ? calculateAction = newAction : alert("wat?");
    savePrev();
    screenInput.value = 0;
}

function calculate(){
    let output = NaN;
    if(isNaN(prevInput) || isNaN(screenInput.value)){
        screenInput.value = NaN
        return ;
    }
    switch(calculateAction){
        case '+':
            output = add(prevInput, screenInput.value);
            break;
        case '-':
            output = subtract(prevInput, screenInput.value);
            break;
        case '*':
            output = multiply(prevInput, screenInput.value);
            break;
        case '/':
            output = divide(prevInput, screenInput.value);
            break;
    }
    clearScreen = true;
    screenInput.value = output.toFixed(5);
}

function add(num1, num2){
    console.log(num1, num2);
    return Number(num1) + Number(num2);   
}

function subtract(num1, num2){
    console.log(num1, num2);
    return Number(num1) - Number(num2);   
}

function multiply(num1, num2){
    console.log(num1, num2);
    return Number(num1) * Number(num2);    
}

function divide(num1, num2){
    console.log(num1, num2);
    return Number(num1) / Number(num2);   
}

function deleteItem(){
    newVal = "";
    for(let i = 0; i < screenInput.value.length - 1; i++)
    {
        newVal += screenInput.value[i];
    }
    screenInput.value = newVal;
}

function resetScreen(){
    screenInput.value = 0;
    prevInput = 0;
    clearScreen = false;
    calculateAction = null;
}