function multiplyBy() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    document.getElementById("block").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    document.getElementById("block").innerHTML = num1 / num2;
}

function addBy() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    let x = parseInt(num1, 10);
    let y = parseInt(num2, 10);
    document.getElementById("block").innerHTML = x + y;
}

function subBy() {
    num1 = document.getElementById("num1").value
    num2 = document.getElementById("num2").value
    let x = parseInt(num1, 10);
    let y = parseInt(num2, 10);
    document.getElementById("block").innerHTML = x - y;
}