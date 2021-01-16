const COUNTRY_LS = "country";
const countrySelect = document.querySelector(".js-country");

function saveCountry(country) {
    localStorage.setItem(COUNTRY_LS, country)
}

function handleChange(event) {
    const currentCountry = countrySelect.selectedOptions[0].value;
    saveCountry(currentCountry);
}

function setCountry(country) {
    countrySelect.value = country;
}

function loadCountry() {
    const country = localStorage.getItem(COUNTRY_LS);
    if (country !== null) {
        setCountry(country);
    }
}

function init() {
    loadCountry();
    countrySelect.addEventListener("change", handleChange);
}

init();
