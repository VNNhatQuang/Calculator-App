$(document).ready(() => {
    // Declare Variable
    var display = document.querySelector('#calc-display>span');

    // input button
    $('button').click(function() {
        // console.log(this.innerText);
        // show calculation in display
        if (display.innerText == "0") {
            display.innerHTML = this.innerText;
        } else {
            display.append(this.innerText);
        }



        // btn AC click
        if (this.getAttribute('value') == "AC") {
            display.innerHTML = "0";
        }



        // btn DEL click
        if (this.getAttribute('value') == "DEL") {
            var calculation = display.innerText;
            display.innerHTML = "";
            for (var i = 0; i < calculation.length - 4; i++) {
                display.append(calculation[i]);
            }
            if (display.innerText == '') {
                display.innerHTML = "0";
            }
        }


        var getCalculation = () => {
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
                    // console.log(`operator: ${operator}`);
                    // Get next number
                    for (var j = i + 1; j < calculation.length; j++) {
                        if (calculation[j] == "+" || calculation[j] == "-" || calculation[j] == "x" || calculation[j] == "/" || calculation[j] == "=") {

                            if (nextNumber == "π")
                                nextNumber = 3.141592653;

                            // console.log(`nextNumber: ${nextNumber}`);
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


        // btn equal (=) click
        if (this.getAttribute('value') == "=") {
            getCalculation();
        }

    });
});