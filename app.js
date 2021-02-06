fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const allCountriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
        <h3 class="country-name"> ${country.name} </h3>
        <p> ${country.capital} </p>
        <button onclick="displayCountryDetail('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;

        allCountriesDiv.appendChild(countryDiv);
    });

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');

    //     countryDiv.className = 'country';



    //     const h3 = document.createElement('h3');
    //     h3.innerText = country.name;
    //     const p = document.createElement('p');
    //     p.innerText = country.capital;
    //     countryDiv.appendChild(h3);
    //     countryDiv.appendChild(p);

    // const countryInfo = `
    //     <h3 class="country-name"> ${country.name} </h3>
    //     <p> ${country.capital} </p>
    // `
    //     countryDiv.innerHTML = countryInfo;

    //     allCountriesDiv.appendChild(countryDiv);
    // }
};

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <img src="${country.flag}">
    `
}