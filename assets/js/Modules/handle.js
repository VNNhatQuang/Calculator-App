// INPUT KEY
var appendDisplay = (value) => {
    if (document.querySelector('#calc-display>span').innerText == "0") {
        document.querySelector('#calc-display>span').innerHTML = "";
        document.querySelector('#calc-display>span').append(value);
    } else {
        document.querySelector('#calc-display>span').append(value);
    }
}

// AC
var AC = () => {
    document.querySelector('#calc-display>span').innerHTML = "0";
}

// DEL
var DEL = () => {
    var calculation = document.querySelector('#calc-display>span').innerText;
    document.querySelector('#calc-display>span').innerHTML = "";
    for (var i = 0; i < calculation.length - 4; i++) {
        document.querySelector('#calc-display>span').append(calculation[i]);
    }
    if (document.querySelector('#calc-display>span').innerText == '') {
        document.querySelector('#calc-display>span').innerHTML = "0";
    }
}

// CALCULATION
var getCalculation = () => {
    // Declare common variable
    var calculation = document.querySelector('#calc-display>span').innerText;
    if (calculation == "=")
        calculation = "0";
    var result;
    // get first number
    var firstNumber = "";
    for (var i = 0; i < calculation.length; i++) {
        if (calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "x" || calculation[i] == "/") {
            if (i == 0) {
                firstNumber += calculation[i];
                continue;
            }
            result = Number.parseFloat(firstNumber);
            break;
        }
        // Normal
        firstNumber += calculation[i];
        // PI - handle function
        if (calculation[i] == "π") {
            firstNumber = "π";
            result = 3.141592653;
            break;
        }
        result = Number.parseFloat(firstNumber);
    }
    // do the math
    var operator;
    var nextNumber = "";
    for (var i = firstNumber.length; i < calculation.length - 1; i++) {
        // get operator
        if (calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "x" || calculation[i] == "/") {
            operator = calculation[i];
            // get next number
            for (var j = i + 1; j < calculation.length; j++) {
                if (calculation[j] == "+" || calculation[j] == "-" || calculation[j] == "x" || calculation[j] == "/" || calculation[j] == "=") {
                    if (nextNumber == "π")
                        nextNumber = 3.141592653;
                    if (operator == "+")
                        result += Number.parseFloat(nextNumber);
                    if (operator == "-")
                        result -= Number.parseFloat(nextNumber);
                    if (operator == "x")
                        result *= Number.parseFloat(nextNumber);
                    if (operator == "/")
                        result /= Number.parseFloat(nextNumber);
                    nextNumber = "";
                    i = j - 1;
                    break;
                }
                nextNumber += calculation[j];
            }
        }
    }
    // show result
    document.querySelector('#calc-display>span').innerText = result;
}

export { appendDisplay, AC, DEL, getCalculation };