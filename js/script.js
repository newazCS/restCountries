const loadCounters = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    console.log(countries[0]);
    const container = document.getElementById('countries');

    const countryHTML = countries.map(country =>getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}
const getCountryHTML = country =>{
    return `
        <div class="country"> 
            <h2>${country.name.common}</h2>
            <h4>${country.region}</h4>
            <img src="${country.flags.png}">
        </div>
    `
}
loadCounters();