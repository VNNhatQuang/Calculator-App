import { display } from "./Modules/handle.js";
import { appendDisplay, AC, DEL, getCalculation } from "./Modules/handle.js";


$(document).ready(() => {

    // input button
    $('button').click(function() {
        // show calculation in display
        if (display.innerText == "0") {
            display.innerHTML = this.innerText;
        } else {
            display.append(this.innerText);
        }

        // btn AC click
        if (this.getAttribute('value') == "AC") {
            AC();
        }

        // btn DEL click
        if (this.getAttribute('value') == "DEL") {
            DEL();
        }

        // btn equal (=) click
        if (this.getAttribute('value') == "=") {
            getCalculation();
        }
    });

});