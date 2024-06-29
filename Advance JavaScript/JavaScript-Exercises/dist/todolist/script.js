const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let cross = document.createElement("span")
        cross.innerHTML = "\u00D7";
        list.appendChild(cross)
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()