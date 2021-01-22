const text = document.querySelector(".js-text")
const form = document.querySelector(".js-form");
const range = form.querySelector("input[type=range]");
const number = form.querySelector("input[type=number]");
const score = document.querySelector(".js-score");
const result = document.querySelector(".js-result");

let maxNumber;

function handleChange() {
    maxNumber = range.value;
    number.max = maxNumber;
    text.innerHTML = `Generate a number between 0 and ${maxNumber}`;
    number.value = "";
    number.focus();
}

function genRandom() {
    return Math.floor(Math.random() * maxNumber) + 1;
}

function handleSubmit(event) {
    event.preventDefault();
    const machineNumber = genRandom();
    const playerNumber = number.value;

    score.innerHTML = `You chose: ${playerNumber}, the machine chose: ${machineNumber}.`;
    if (playerNumber > machineNumber) {
        result.innerHTML = "You won!"
    } else if (playerNumber < machineNumber) {
        result.innerHTML = "You lost!"
    } else {
        result.innerHTML = "Drew!"
    }
}

function init() {
    range.addEventListener("change", handleChange);
    form.addEventListener("submit", handleSubmit);
    handleChange();
}

init();
