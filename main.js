function numberToScreen(id) {
    let number = Number(document.getElementById(id).innerHTML);
    let resultField = document.getElementById('result');
    resultField.textContent = number; 
}

ids = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9'];
// let button1 = 'x';
ids.forEach((id) => {
    console.log("id: " + id);
    let button1 = document.getElementById(id);
    button1.addEventListener('click', () => {
        console.log(button1.innerHTML)
        numberToScreen(button1.id);
    });  
});

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
    let operand2 = document.getElementById('secondOperand').value;
    let result  = operate(operator, Number(operand1), Number(operand2));
    document.getElementById('result').textContent = result;
}

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     calculate();
// });
