var count = 0;

function increase() {
    document.getElementById("num").innerHTML = count++;
}
function decrease() {
    document.getElementById("num").innerHTML = count--
}
function reset() {
    count = 0
    document.getElementById("num").innerHTML = count
}