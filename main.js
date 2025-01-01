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

function addEventListenersToClear() {
    let button = document.getElementById('clear-btn');
    button.addEventListener('click', () => {
        textField = document.getElementById('result');
        textField.innerHTML = '';
        warningBox = document.getElementById('warning-box');
        warningBox.innerHTML = '';
    });  
}



addEventListenersToDigits();
addEventListenersToCalc();
addEventListenersToClear();

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
    let operand1 = Number(text.match(/\d+/g)[0]);
    let operand2 = Number(text.match(/\d+/g)[1]);
    let operator = text.match(/\D+/g)[0];
    let numberOfOPerators = text.match(/\D+/g).length
    let resut = 0;
    if (numberOfOPerators == 1) {
        result = operate(operator, operand1, operand2);
        console.log('result: ' + result + ' type: ' + typeof result);
        // console.log('operand1 is ' + operand1 + ' and type is ' + typeof operand1);
    } else {
        document.getElementById('warning-box').textContent = 'Use only one operator at a time'
    }
    // } else if (text.length = 5) { //two operations
    //     // let newOperand1 = operate(operator, operand1, operand2);
    //     // let nextOperator = text[3];
    //     // let operand3 = Number(text[4]);
    //     // result = operate(nextOperator, newOperand1, operand3);
    //     // console.log('result: ' + result + ' type: ' + typeof result);
    // }
    console.log('result: ' + result + ' type: ' + typeof result);
    
    textField.textContent = result;
    return result; 
}

