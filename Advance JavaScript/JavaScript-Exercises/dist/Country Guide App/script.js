const input = document.getElementById("input");
const btnSearch = document.getElementById("btn-Search");
const result = document.getElementById("result");

btnSearch.addEventListener("click", () => {
    let countryName = input.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies).name]);
            console.log(Object.values(data[0].languages).toString().split(",").join(","));
            result.innerHTML = `
            <div class="w-full flex items-center justify-center mt-5">
            <img src="${data[0].flags.svg}"
            class="w-[250px]">
            </div>

            <div class="mt-4 w-full">
            <h1 class="font-semibold text-2xl text-center" >${data[0].name.common}</h1>
            </div>

            <div class="mt-4 w-full flex items-center gap-2">
            <h1 class="font-semibold text-base">Capital:</h1>
            <span class="font-medium text-gray-800">${data[0].capital[0]}</span>
            </div>

            <div class="mt-4 w-full flex items-center gap-2">
            <h1 class="font-semibold text-base">Continents:</h1>
            <span class="font-medium text-gray-800">${data[0].continents[0]}</span>
            </div>

            <div class="mt-4 w-full flex items-center gap-2">
            <h1 class="font-semibold text-base">Population:</h1>
            <span class="font-medium text-gray-800">${data[0].population}</span>
            </div>

            <div class="mt-4 w-full flex items-center gap-2">
            <h1 class="font-semibold text-base">Currency:</h1>
            <span class="font-medium text-gray-800">${Object.keys(data[0].currencies)[0]}</span>
            </div>

            <div class="mt-4 w-full flex items-center gap-2">
            <h1 class="font-semibold text-base">Common Languages:</h1>
            <span class="font-medium text-gray-800">${Object.values(data[0].languages)
                    .toString()
                    .split()
                    .join(", ")
                }</span>
            </div>
            `

        });
})