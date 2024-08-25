// JavaScript code for calculator

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const deleteButton = document.getElementById('delete');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let secondOperand = null;

    // Event listener for number and operator buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.innerText;

            // Handle number and decimal point input
            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.value = currentInput;
            }

            // Handle operator input
            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            }
        });
    });

    // Calculate result
    equalsButton.addEventListener('click', function() {
        if (firstOperand !== null && currentInput !== '') {
            secondOperand = parseFloat(currentInput);
            let result = 0;

            if (operator === '+') result = firstOperand + secondOperand;
            if (operator === '-') result = firstOperand - secondOperand;
            if (operator === '*') result = firstOperand * secondOperand;
            if (operator === '/') result = firstOperand / secondOperand;

            display.value = result;
            currentInput = result.toString();
            firstOperand = null;
            secondOperand = null;
            operator = '';
        }
    });

    // Clear display
    clearButton.addEventListener('click', function() {
        display.value = '';
        currentInput = '';
        firstOperand = null;
        secondOperand = null;
        operator = '';
    });

    // Delete last character
    deleteButton.addEventListener('click', function() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    });
});
