// import getCalculation from './app';
$(document).ready(() => {
    var area = document.querySelector("html");
    var display = document.querySelector('#calc-display>span');

    // input key
    var appendDisplay = (value) => {
        if (display.innerText == "0") {
            display.innerHTML = "";
            display.append(value);
        } else {
            display.append(value);
        }
    }

    // AC
    var AC = () => {
        display.innerHTML = "0";
    }

    // DEL
    var DEL = () => {
        var calculation = display.innerText;
        display.innerHTML = "";
        for (var i = 0; i < calculation.length - 1; i++) {
            display.append(calculation[i]);
        }
        if (display.innerText == '') {
            display.innerHTML = "0";
        }
    }

    // Calculation
    var calculation = () => {
        // Declare common variable
        var calculation = display.innerText;
        if (calculation == "=")
            calculation = "0";
        var result;

        // GET FIRST NUMBER
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

            // PI - Handle function
            if (calculation[i] == "π") {
                firstNumber = "π";
                result = 3.141592653;
                break;
            }

            result = Number.parseFloat(firstNumber);
        }

        // DO THE MATH
        var operator;
        var nextNumber = "";

        for (var i = firstNumber.length; i < calculation.length - 1; i++) {

            // Get operator
            if (calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "x" || calculation[i] == "/") {
                operator = calculation[i];
                // Get next number
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

        // SHOW RESULT
        display.innerText = result;
    }

    area.onkeyup = function(e) {
        // console.log(e.which);
        // console.log(e.shiftKey);

        switch (e.which) {
            case 13: // enter
                appendDisplay("=");
                calculation();
                // console.log("=");
                break;
            case 48: // 0
                appendDisplay(0);
                // console.log("0");
                break;
            case 49: // 1
                appendDisplay(1);
                // console.log("1");
                break;
            case 50: // 2
                appendDisplay(2);
                // console.log("2");
                break;
            case 51: // 3
                appendDisplay(3);
                // console.log("3");
                break;
            case 52: // 4
                appendDisplay(4);
                // console.log("4");
                break;
            case 53: // 5
                appendDisplay(5);
                // console.log("5");
                break;
            case 54: // 6
                appendDisplay(6);
                // console.log("6");
                break;
            case 55: // 7
                appendDisplay(7);
                // console.log("7");
                break;
            case 56: // 8
                appendDisplay(8);
                // console.log("8");
                break;
            case 57: // 9
                appendDisplay(9);
                // console.log("9");
                break;
            case 80: // π
                appendDisplay(3.141592653);
                // console.log("π");
                break;
            case 190: // .
                appendDisplay('.');
                // console.log(".");
                break;
            case 8: // Backspace (DEL)
                DEL();
                // console.log("DEL");
                break;
            case 27: // Esc (AC)
                AC();
                // console.log("AC");
                break;
            case 187: // +
                appendDisplay('+');
                // console.log("+");
                break;
            case 189: // -
                appendDisplay('-');
                // console.log("-");
                break;
            case 106: // *
                appendDisplay('x');
                // console.log("*");
                break;
            case 191: // /
                appendDisplay('/');
                // console.log("/");
                break;
        }
    }


});