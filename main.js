function symbolToScreen(id) {
    let symbol = document.getElementById(id).innerHTML;
    let resultField = document.getElementById('result');
    resultField.textContent += symbol; 
}

function addEventListenersToDigits() {
    ids = ['num0', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'add', 'subtract', 'multiply', 'divide'];
    ids.forEach((id) => {
        // console.log("id: " + id);
        let button = document.getElementById(id);
        button.addEventListener('click', () => {
            // console.log(button.innerHTML)
            symbolToScreen(button.id);
        });  
    });
}

function addEventListenersToCalc() {
    let button = document.getElementById('calc-btn');
    button.addEventListener('click', () => {
        // console.log(button.innerHTML)
        calculate();
    });  
}

addEventListenersToDigits();
addEventListenersToCalc();

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
    // console.log('calculate called')
    textField = document.getElementById('result');
    let text = textField.innerHTML;
    let operand1 = Number(text[0]);
    // console.log('operand1 is ' + operand1 + ' and type is ' + typeof operand1);
    let operand2 = Number(text[2]);
    let operator = text[1];
    let result = operate(operator, operand1, operand2);
    textField.textContent = result;
    return result; 
    // let operand1 = document.getElementById('firstOperand').value;
    // let operand2 = document.getElementById('secondOperand').value;
    // let result  = operate(operator, Number(operand1), Number(operand2));
    // document.getElementById('result').textContent = result;
}

