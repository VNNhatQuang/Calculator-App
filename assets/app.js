$(document).ready(function() {
    // Declare Variable
    var display = document.querySelector('#calc-display>span');

    // input key
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


        // btn equal (=) click
        if (this.getAttribute('value') == "=") {
            // Declare common variable
            var calculation = display.innerText;
            var result;


            // GET FIRST NUMBER
            var firstNumber = "";
            for (var i = 0; i < calculation.length - 1; i++) {
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

                // Factorial (!) - Handle function
                if (calculation[i] == "!") {
                    var fact = 1;
                    for (var f = 1; f <= Number.parseInt(firstNumber); f++) fact *= f;
                    result = fact;
                    break;
                }

                // Srqt - Handle function
                if (calculation[i] == "√") {
                    var tempSqrt = "";
                    for (var s = i + 1; s < calculation.length - 1; s++) {
                        if (calculation[s] == "+" || calculation[s] == "-" || calculation[s] == "x" || calculation[s] == "/") break;
                        tempSqrt += calculation[s];
                    }
                    firstNumber += tempSqrt;
                    result = Math.sqrt(Number.parseFloat(tempSqrt));
                    break;
                }

                // Pow (Format: a^b) - Handle function
                if (calculation[i] == "∧") {
                    var a = "";
                    var b = "";
                    // get a
                    for (var pa = i - 1; pa >= 0; pa--) {
                        a += calculation[pa];
                    }
                    // reverse string a
                    a = a.split('').reverse().join('');

                    // get b
                    for (var pb = i + 1; pb < calculation.length - 1; pb++) {
                        if (calculation[pb] == "+" || calculation[pb] == "-" || calculation[pb] == "x" || calculation[pb] == "/") break;
                        b += calculation[pb];
                    }
                    firstNumber += b;
                    result = Math.pow(a, b);
                    break;
                }

                // Normal
                result = Number.parseFloat(firstNumber);
            }


            // console.log(`result: ${result}`);
            // console.log(`firstNumber: ${firstNumber}`);
            // DO THE MATH
            var operator;
            var numbers = "";

            for (var i = firstNumber.length; i < calculation.length - 1; i++) {

                // Get operator
                if (calculation[i] == "+" || calculation[i] == "-" || calculation[i] == "x" || calculation[i] == "/") {
                    operator = calculation[i];

                    // Get next numbers
                    for (var j = i + 1; j < calculation.length; j++) {

                        if (calculation[j] == "+" || calculation[j] == "-" || calculation[j] == "x" || calculation[j] == "/" || calculation[j] == "=") {

                            // PI - Handle function
                            if (numbers == "π") {
                                numbers = "3.141592653";
                                i += 1;
                                j += 1;
                            } else {
                                i += numbers.length + 1;
                                j += numbers.length;
                            };

                            // Factorial (!) - Handle function
                            if (numbers[numbers.length - 1] == "!") {
                                var fact = 1;
                                var tempFact = "";
                                for (var f = 0; f < numbers.length - 1; f++) tempFact += numbers[f];
                                for (var f = 1; f <= Number.parseInt(tempFact); f++) fact *= f;
                                numbers = fact.toString();
                            }

                            // Sqrt - Handle function
                            if (numbers[0] == "√") {
                                var tempSqrt = "";
                                for (var s = 1; s < numbers.length; s++) {
                                    tempSqrt += numbers[s];
                                }
                                numbers = Math.sqrt(Number.parseFloat(tempSqrt));
                                numbers = numbers.toString();
                            }

                            // Pow - Handle function
                            for (var pow = 0; pow < numbers.length; pow++) {
                                if (numbers[pow] == "∧") {
                                    var a = "";
                                    var b = "";
                                    // get a
                                    for (var pa = pow - 1; pa >= 0; pa--) {
                                        a += numbers[pa];
                                    }
                                    // reverse string a
                                    a = a.split('').reverse().join('');
                                    // get b
                                    for (var pb = pow + 1; pb < numbers.length; pb++) {
                                        b += numbers[pb];
                                    }
                                    numbers = Math.pow(a, b);
                                    numbers = numbers.toString();
                                };
                            }



                            // console.log(`number${i}: ${numbers}`);
                            // Calculation
                            if (operator == "+") result += Number.parseFloat(numbers);
                            if (operator == "-") result -= Number.parseFloat(numbers);
                            if (operator == "x") result *= Number.parseFloat(numbers);
                            if (operator == "/") result /= Number.parseFloat(numbers);



                            numbers = "";

                            // break;
                        }
                        numbers += calculation[j];
                    }
                }
            }
            // Show result
            display.innerText = result;
        }
    });
});