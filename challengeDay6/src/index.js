const COUNTRY_LS = "country";
const countrySelect = document.querySelector(".js-country");

function saveCountry(country) {
    localStorage.setItem(COUNTRY_LS, country)
}

function handleChange() {
    const currentCountry = countrySelect.value;
    saveCountry(currentCountry);
}

function setCountry(country) {
    const option = document.querySelector(`option[value="${country}"]`);
    option.selected = true;
}

function loadCountry() {
    const loadedCountry = localStorage.getItem(COUNTRY_LS);
    if (loadedCountry) {
        setCountry(loadedCountry);
    }
}

function init() {
    loadCountry();
    countrySelect.addEventListener("change", handleChange);
}

init();
