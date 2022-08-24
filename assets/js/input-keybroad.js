import { area, display } from "./Modules/handle.js";
import { appendDisplay, AC, DEL, getCalculation } from "./Modules/handle.js";


$(document).ready(() => {

    area.onkeyup = function(e) {
        // console.log(e.which);
        // console.log(e.shiftKey);
        switch (e.which) {
            case 13: // enter
                appendDisplay("=");
                getCalculation();
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
                appendDisplay("π");
                // console.log("π");
                break;
            case 190: // .
                appendDisplay('.');
                // console.log(".");
                break;
            case 8: // Backspace (DEL)
                appendDisplay("DEL");
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