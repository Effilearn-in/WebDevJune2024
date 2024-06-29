const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-box");


btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div id="word" class="flex items-end justify-between">
            <h1 class="text-2xl font-bold text-black/75">${inpWord}</h1>
            <button onclick="playsound()">
                <i class="fa-solid fa-volume-high text-violet-400"></i>
            </button>
        </div>
    </div>

    <div id="details" class="flex justify-start pt-2 pb-4 font-medium item-center text-[#b3b6d4]">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic}</p> 
    </div>

    <div>
        <p id="word-meaning" class="text-[#575a7b]">${data[0].meanings[0].definitions[0].definition}</p>
        <p id="word-example" class="text-[#575a7b] italic border-l-[5px] border-[#ae9cff] pl-5 mt-[30px]">${data[0].meanings[0].definitions[0].example || ""}</p>
    </div>`;
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
            console.log(sound);
        })

        .catch(() => {
            result.innerHTML = `<h3 class="text-3xl text-center font-semibold text-black/60">Couldn't Find The Word</h3>`
        })
});

function playsound() {
    sound.play();
}