// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockTitle = document.querySelector("h3");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  const now = new Date();
  const diffMilliseconds = new Date(xmasDay - now - NINE_HOURS_MILLISECONDS);
  const date = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
  const hours = diffMilliseconds.getHours();
  const minutes = diffMilliseconds.getMinutes();
  const seconds = diffMilliseconds.getSeconds();

  const dateText = `${date < 10 ? `0${date}` : date}`;
  const hoursText = `${hours < 10 ? `0${hours}` : hours}`;
  const minutesText = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const secondsText = `${seconds < 10 ? `0${seconds}` : seconds}`;

  clockTitle.innerText = `${dateText}d ${hoursText}h ${minutesText}m ${secondsText}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
