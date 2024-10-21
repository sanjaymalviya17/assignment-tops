let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op !== '.') return; 
    currentInput += op;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
