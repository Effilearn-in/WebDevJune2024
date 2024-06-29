// // Function to perform currency conversion
// function convertCurrency(baseCurrency, targetCurrency, amount) {
//     const appId = 'e48a789e60327ab3e29b941e';
//     const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${appId}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Extract exchange rate for the target currency
//             const exchangeRate = data.rates[targetCurrency];

//             // Calculate the converted amount
//             const convertedAmount = amount * exchangeRate;

//             // Display converted amount on the webpage
//             document.getElementById('result').textContent = `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
//         })
//         .catch(error => console.log('Error fetching currency data:', error));
// }

// // Event listener for form submission
// document.getElementById('conversion-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const baseCurrency = document.getElementById('base-currency').value;
//     const targetCurrency = document.getElementById('target-currency').value;
//     const amount = parseFloat(document.getElementById('amount').value);
//     convertCurrency(baseCurrency, targetCurrency, amount);
// });

function convertCurrency(baseCurrency, targetCurrency, amount) {
    const appId = 'e48a789e60327ab3e29b941e';
    const apiUrl = `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${appId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[targetCurrency];
            const convertedAmount = amount * exchangeRate;

            document.getElementById("result").innerHTML = `
            <p class="text-2xl font-semibold">${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}</p>
            `;
        })
        .catch(error => console.log('Error fetching currency data:', error));
}

// Event listener for form submission
document.getElementById('conversion-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const baseCurrency = document.getElementById('base-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    console.log(amount)
    convertCurrency(baseCurrency, targetCurrency, amount);
});
