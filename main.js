function operate(operator, operand1, operand2) {
    let result = 0;
    if (operator == '+') {
        result = operand1 + operand2;
    } else if (operator == '-') {
        result = operand1 - operand2;
    } else if (operator == '*') {
        result = operand1 * operand2;
    } else if (operator == '/') {
        if (operand2 === 0) {
            result = "Error: Division by zero";
        }
        result = operand1 / operand2;
    } else {
        result = "Error: Invalid operator";
    }
    document.getElementById('result').textContent = result
}

function calculate() {
    let result  = 'test';
    document.getElementById('result').textContent = result;

}

document.getElementById('submit-btn').onclick = () => calculate();

// let selectedOperator = 'None selected';
// document.getElementById('plus').onclick = () => {
//     selectedOperator = document.querySelector('input[name="operation"]:checked').value;
//     console.log('Selected operator is ' + selectedOperator);
// };

// console.log('selectedOperator is ' + selectedOperator);

// let operandA = document.getElementById('firstOperand');
// let operandB = document.getElementById('secondOperand');

// document.getElementById("submit-btn").onclick = operate(selectedOperator, operandA, operandB);

// document.getElementById('result').textContent = result
