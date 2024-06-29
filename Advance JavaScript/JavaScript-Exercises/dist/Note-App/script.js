const addnotes = document.getElementById("addnotes");
const notesEditer = document.getElementById("notesEditer");
const noteClosebtn = document.getElementById("noteClosebtn");
const inputTitle = document.getElementById("inputTitle");
const inputDes = document.getElementById("inputDes");
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days = daylist[day];
let opt = document.getElementById("options")

console.log(days);

addnotes.addEventListener("click", function () {
    notesEditer.style.opacity = "1";
    notesEditer.style.zIndex = "30";
});

noteClosebtn.addEventListener("click", function () {
    notesEditer.style.opacity = "0";
    notesEditer.style.zIndex = "0";
    inputTitle.value = "";
    inputDes.value = "";
});


let arr = [];

function submitNote() {
    var clutter = "";

    let titleAdd = inputTitle.value;
    let desAdd = inputDes.value;
    clutter += `  <div class="flex flex-col justify-between p-2 bg-white w-60 h-60 rounded-xl">
    <div class="">
        <h1 class="px-3 w-full h-[32px]  text-2xl overflow-hidden font-bold">${titleAdd}</h1>
        <p class="w-full px-3 overflow-hidden h-36">${desAdd}
        </p>
    </div>

    <div class="flex items-center justify-between p-1 px-3 bg-gray-200 rounded-xl">
        <div>${days}</div>
        <button id="options" class="cursor-pointer z-30 relative btnDel">
        <svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </button>
    </div>
</div>`;

    inputTitle.value = "";
    inputDes.value = "";

    arr.push(clutter); // Push the new note to the array

    // Display the notes
    displayNotes();

    notesEditer.style.opacity = "0";
    notesEditer.style.zIndex = "0";

    saveData(); // Call saveData after adding a note
}

function del() {
    opt.addEventListener("click", function () {
        console.log("hello");
    })
};


function displayNotes() {
    const notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = arr.join(""); // Join array elements into a single string and set as innerHTML
}

function saveData() {
    localStorage.setItem("notes", document.getElementById("notesContainer").innerHTML); // Save the HTML content directly
}

function loadData() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        document.getElementById("notesContainer").innerHTML = storedNotes; // Set the HTML content directly
    }
}

// Call the loadData function to load notes when the page is loaded

loadData();

