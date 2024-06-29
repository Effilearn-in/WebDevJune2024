// Generate a random integer between 1 and 10
var num = Math.ceil(Math.random() * 10);
console.log(num);


const inputBtn = document.getElementById("input-btn");
const input = document.getElementById("input");
const block = document.getElementById("block");


function getInputVal() {
    var guess = input.value
    block.style.display = "block"

    if (guess == num) {
        block.innerHTML = "Matched"
    } else {
        block.innerHTML = "not matched, the number was" + " " + num;
    }
}
inputBtn.addEventListener("click", getInputVal);
