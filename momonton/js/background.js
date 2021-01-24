const body = document.querySelector("body");
const placeSpan = document.querySelector(".js-place span");

const ACCESS_KEY = "bimgirhicUqCliJslK92a08-Mr3U30ZLbvlBrOSB5t0";
const LOCATION = "background";
const REFRESH_TERM_MIN = 1;

function saveBackground(place) {
    localStorage.setItem(LOCATION, JSON.stringify(place));
}

function paintBackground(place) {
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${place.url})`;
    placeSpan.innerHTML = `${place.name}, ${place.city}, ${place.country}`;
}

function getBackground() {
    fetch(
        `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=landscape&orientation=landscape`
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        const url = json.urls.full;
        const name = json.location.name;
        const city = json.location.city;
        const country = json.location.country;
        placeSpan.innerHTML = `${name} ${city} ${country}`;

        const date = new Date();
        const place = {
            url: url,
            name: name,
            city: city,
            country: country,
            expirationDate: date.setMinutes(date.getMinutes() + REFRESH_TERM_MIN)
        }
        saveBackground(place);
        paintBackground(place);
    });
}

function loadBackground() {
    const loadedBackground = localStorage.getItem(LOCATION);
    if (loadedBackground === null) {
        getBackground();
    } else {
        const parsedBackground = JSON.parse(loadedBackground);
        if (new Date() > parsedBackground.expirationDate) {
            getBackground();
        } else {
            paintBackground(parsedBackground);
        }
    }
}

function init() {
    loadBackground();
    setInterval(loadBackground, 60000);
}

init();
