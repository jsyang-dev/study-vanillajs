const body = document.querySelector("body");
const result = document.querySelector(".js-result");
const number = document.querySelectorAll(".js-number");
const operator = document.querySelectorAll(".js-operator");
const equal = document.querySelector(".js-equal");
const cancel = document.querySelector(".js-cancel");

let resultValue = 0;
let inputValue = 0;
let operatorValue = "";

function paintImage() {
    const image = new Image();
    image.src = `images/bg.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function handleNumberClick(event) {
    inputValue = parseInt(inputValue + event.target.innerText);
    result.innerHTML = inputValue;
}

function operate() {
    switch (operatorValue) {
        case "+":
            resultValue = resultValue + inputValue;
            break;
        case "-":
            resultValue = resultValue - inputValue;
            break;
        case "*":
            resultValue = resultValue * inputValue;
            break;
        case "/":
            resultValue = Math.round(resultValue / inputValue);
            break;
    }
    result.innerHTML = resultValue;
}

function handleOperatorClick(event) {
    if (operatorValue !== "") {
        operate();
    } else if (inputValue !== 0) {
        resultValue = inputValue;
    }

    inputValue = 0;
    operatorValue = event.target.innerText;
}

function handleEqualClick() {
    operate();
    inputValue = 0;
    operatorValue = "";
}

function handleCancelClick() {
    resultValue = 0;
    inputValue = 0;
    operatorValue = "";
    result.innerHTML = resultValue;
}

function init() {
    number.forEach(item => item.addEventListener("click", handleNumberClick));
    operator.forEach(item => item.addEventListener("click", handleOperatorClick));
    equal.addEventListener("click", handleEqualClick);
    cancel.addEventListener("click", handleCancelClick);
    paintImage();
}

init();