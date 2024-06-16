let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#btn-restart");
let newGameButton = document.querySelector("#btn-new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWin = () => {
    for (let pattern of winPattern) {
        let position1Value = boxes[pattern[0]].innerText;
        let position2Value = boxes[pattern[1]].innerText;
        let position3Value = boxes[pattern[2]].innerText;

        if (position1Value != "" && position2Value != "" && position3Value != "") {
            if (position1Value === position2Value && position2Value === position3Value) {
                showWinner(position1Value);
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turno) {
            box.innerText = 'O';
            turno = false;
        }
        else {
            box.innerText = 'X';
            turno = true;
        }
        box.disabled = true;
        checkWin();
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const restartGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newGameButton.addEventListener("click", restartGame);
resetButton.addEventListener("click", restartGame);