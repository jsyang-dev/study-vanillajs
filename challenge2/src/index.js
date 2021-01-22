const SMALL_CLASS = "small";
const MEDIUM_CLASS = "medium";
const LARGE_CLASS = "large";

const body = document.querySelector("body");

function handleResize() {
    body.classList.remove(SMALL_CLASS, MEDIUM_CLASS, LARGE_CLASS);
    if (window.innerWidth < 300) {
        body.classList.add(SMALL_CLASS);
    } else if (window.innerWidth < 600) {
        body.classList.add(MEDIUM_CLASS);
    } else {
        body.classList.add(LARGE_CLASS);
    }
}

function init() {
    window.addEventListener("resize", handleResize);
    handleResize();
}

init();
