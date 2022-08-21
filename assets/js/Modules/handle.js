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

export default { appendDisplay, AC };