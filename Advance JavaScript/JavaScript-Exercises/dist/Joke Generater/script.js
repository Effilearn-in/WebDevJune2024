const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const joke = document.getElementById("Jokes");
const btn = document.getElementById("btn");


let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            joke.textContent = `${item.joke}`
        });
}
btn.addEventListener("click", getJoke)
getJoke();