let moviesNames = document.getElementById("input");
let searchBtn = document.getElementById("Search-btn");
let result = document.getElementById("result");
let key = "35de4cfa"

let getMovie = () => {
    let movieName = moviesNames.value;
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // If input field is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="text-center text-3xl font-semibold text-white mt-5">Please Enter A Movie Name</h3>`
    } else {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                result.innerHTML = `
                <div class="grid grid-cols-3 mt-5">

                <div class=" col-span-1">
                <img width="200" src="${data.Poster}">
                </div>

                <div class=" col-span-2 flex items-center justify-center flex-col gap-2">
                <h3 class="text-center text-3xl font-semibold text-white">${data.Title}</h3>
                <p class="text-center text-2xl font-semibold text-white flex items-center gap-2"><span><svg width="28" fill="#FDE047" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></span>${data.imdbRating}</p>

                <div class="flex gap-3 items-center w-full justify-center">
                <p class="text-lg font-normal text-gray-600">${data.Rated}</p>
                <p class="text-lg font-normal text-gray-600">${data.Year}</p>
                <p class="text-lg font-normal text-gray-600">${data.Runtime}</p>
                </div>

                <div class="flex gap-3 items-center w-full justify-center">
                <a class="text-lg font-normal bg-transparent py-1 px-3 border-[1px] border-white rounded-lg text-white flex gap-2 ">
                ${data.Genre.split(', ')[0]}
                </a>
                   <a class="text-lg font-normal bg-transparent py-1 px-3 border-[1px] border-white rounded-lg text-white flex gap-2 ">
                ${data.Genre.split(', ')[1]}
                </a>
                <a class="text-lg font-normal bg-transparent py-1 px-3 border-[1px] border-white rounded-lg text-white flex gap-2 ">
                ${data.Genre.split(', ')[2]}
                </a>
                </div>
                </div>
                </div>

                <div class="max-w-[540px] mt-4">
                <h1 class="text-xl font-semibold text-white">Plot :</h1>
                <p class=" text-lg font-semibold text-gray-400">${data.Plot}</p>
                </div>

                <div class="max-w-[540px] mt-4">
                <h1 class="text-xl font-semibold text-white">cast :</h1>
                <p class=" text-lg font-semibold text-gray-400">${data.Actors}</p>
                </div>
                `
            })
    }
};                                                                                         