import React, { useState } from "react";

export default function Country() {
    const [userInput, setUserInput] = useState("India");
    const [countryData, setCountryData] = useState(null);

    function handleAPI() {
        let finalURL = `https://restcountries.com/v3.1/name/${userInput}?fullText=true`;
        fetch(finalURL)
            .then((response) => response.json())
            .then((data) => {
                setCountryData(data[0]);
                console.log("data[0] ", data[0]);
                console.log("data ", data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <label htmlFor="userInput" className="form-label">Country Name</label>
                <input 
                    type="text" 
                    id="userInput" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)} 
                    className="form-control" 
                    placeholder="Enter country name" 
                />
            </div>
            <button onClick={handleAPI} className="btn btn-primary mb-3">Search</button>

            {countryData && (
                <div className="card mt-3">
                    {countryData.flags && countryData.flags.svg && (
                        <img 
                            src={countryData.flags.svg} 
                            width={150} 
                            height={150} 
                            className="mt-5 card-img-top" 
                            alt={`Flag of ${countryData.name.common}`} 
                        />
                    )}
                    <div className="card-body">
                        <h5 className="card-title">{countryData.name.common}</h5>
                        <p className="card-text">
                            <strong>Official Name:</strong> {countryData.name.official}<br />
                            <strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : "N/A"}<br />
                            <strong>Region:</strong> {countryData.region}<br />
                            <strong>Subregion:</strong> {countryData.subregion}<br />
                            <strong>Population:</strong> {countryData.population.toLocaleString()}<br />
                            <strong>Area:</strong> {countryData.area.toLocaleString()} km²<br />
                            <strong>Timezone:</strong> {countryData.timezones ? countryData.timezones.join(', ') : "N/A"}<br />
                            <strong>Borders:</strong> {countryData.borders ? countryData.borders.join(', ') : "N/A"}<br />
                            <strong>Currencies:</strong> {countryData.currencies ? Object.values(countryData.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : "N/A"}<br />
                            <strong>Languages:</strong> {countryData.languages ? Object.values(countryData.languages).join(', ') : "N/A"}<br />
                            <strong>Demonym:</strong> {countryData.demonyms ? `${countryData.demonyms.eng.m} (m), ${countryData.demonyms.eng.f} (f)` : "N/A"}<br />
                            <strong>Gini Index:</strong> {countryData.gini ? countryData.gini[Object.keys(countryData.gini)[0]] : "N/A"}<br />
                            <strong>Start of Week:</strong> {countryData.startOfWeek}<br />
                            <strong>Google Maps:</strong> <a href={countryData.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a><br />
                            <strong>OpenStreetMap:</strong> <a href={countryData.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">View on OpenStreetMap</a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}