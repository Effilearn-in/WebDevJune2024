let inputText = document.getElementById("inputText")

function submit() {

    document.getElementById("message-output").innerHTML = inputText.value;
    inputText.value = "";
}