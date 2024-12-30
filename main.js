function operate(operator, operand1, operand2) {
    if (operator == '+') {
        return operand1 + operand2;
    } else if (operator == '-') {
        return operand1 - operand2;
    } else if (operator == '*') {
        return operand1 * operand2;
    } else if (operator == '/') {
        if (operand2 === 0) {
            return "Error: Division by zero";
        }
        return operand1 / operand2;
    } else {
        return "Error: Invalid operator";
    }
}

function calculate() {
    // let operator = document.querySelector('input[name="operation"]:checked').value;
    let operator = 'no operator';
    if (document.getElementById('plus').checked) {
        operator = '+';
    } else if (document.getElementById('minus').checked) {
        operator = '-';
    } else if (document.getElementById('multiply').checked) {
        operator = '*';
    } else if (document.getElementById('divide').checked) {
        operator = '/';
    }   
    console.log('operator is ' + operator);
    let operand1 = document.getElementById('firstOperand').value;
    // console.log('1st op is ' + operand1);
    let operand2 = document.getElementById('secondOperand').value;
    let result  = operate(operator, Number(operand1), Number(operand2));
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
