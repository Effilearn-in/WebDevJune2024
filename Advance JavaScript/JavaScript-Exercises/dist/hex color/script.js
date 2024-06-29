// function changeColors() {
//     var hex_number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

//     var hexCode = "";

//     for (var i = 0; i < 6; i++) {
//         var random_index = Math.floor(Math.random() * hex_number.length);

//         hexCode += hex_number[random_index]
//     }

//     document.getElementById("hex").innerHTML = "#" + hexCode;
//     document.getElementsByTagName("body")[0].style.background = "#" + hexCode;
// }

function changeColors() {
    var hex_number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    var hexCode = "";

    for (var i = 0; i < 6; i++) {
        var random_index = Math.floor(Math.random() * hex_number.length);

        hexCode += hex_number[random_index];
    }

    document.getElementById("hex").innerHTML = "#" + hexCode

    document.getElementsByTagName("body")[0].style.background = "#" + hexCode
}