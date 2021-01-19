const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const pendingList = document.querySelector(".js-pendingList");
const finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISHED";

let pending = [];
let finished = [];


function loadPending() {
    const loadedPending = localStorage.getItem(PENDING_LS);
    if (loadedPending !== null) {
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function (item) {
            paintPending(item.text);
        })
    }
}

function loadFinished() {
    const loadedPFinished = localStorage.getItem(FINISHED_LS);
    if (loadedPFinished !== null) {
        const parsedFinished = JSON.parse(loadedPFinished);
        parsedFinished.forEach(function (item) {
            paintFinished(item.text);
        })
    }
}

function savePending() {
    localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function deletePending(li) {
    pendingList.removeChild(li);
    pending = pending.filter(function (item) {
        return item.id !== parseInt(li.id);
    });
    savePending();
}

function clickDeletePendingButton(event) {
    const li = event.target.parentNode;
    deletePending(li);
}

function clickFinishButton(event) {
    const li = event.target.parentNode;
    deletePending(li);
    paintFinished(li.querySelector("span").innerText);
}

function paintPending(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const finishButton = document.createElement("button");
    const newId = (pending.length === 0 ? 1 : pending[pending.length - 1].id + 1);

    span.innerText = value;
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", clickDeletePendingButton);
    finishButton.innerText = "✅";
    finishButton.addEventListener("click", clickFinishButton);

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(finishButton);
    li.id = newId.toString();
    pendingList.appendChild(li);

    const item = {
        text: value,
        id: newId
    };
    pending.push(item);
    savePending();
}

function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function deleteFinished(li) {
    finishedList.removeChild(li);
    finished = finished.filter(function (item) {
        return item.id !== parseInt(li.id);
    });
    saveFinished();
}

function clickDeleteFinishedButton(event) {
    const li = event.target.parentNode;
    deleteFinished(li);
}

function clickBackButton(event) {
    const li = event.target.parentNode;
    deleteFinished(li);
    paintPending(li.querySelector("span").innerText);
}

function paintFinished(value) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    const backButton = document.createElement("button");
    const newId = (finished.length === 0 ? 1 : finished[finished.length - 1].id + 1);

    span.innerText = value;
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", clickDeleteFinishedButton);
    backButton.innerText = "⏪";
    backButton.addEventListener("click", clickBackButton);

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(backButton);
    li.id = newId.toString();
    finishedList.appendChild(li);

    const item = {
        text: value,
        id: newId
    };
    finished.push(item);
    saveFinished();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintPending(currentValue);
    input.value = "";
}

function init() {
    loadPending();
    loadFinished();
    form.addEventListener("submit", handleSubmit);
}

init();
