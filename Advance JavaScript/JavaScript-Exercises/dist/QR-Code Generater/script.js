const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const qrContainer = document.getElementById("qrContainer");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        setTimeout(() => {
            qrContainer.innerHTML = `<a href="${qrImage.src}" download="qr-code.png" class="p-2 rounded-lg bg-blue-700 text-white font-medium cursor-pointer">Download</a>`
        }, 100);

        qrText.value = "";
    } else {
        qrText.classList.add("error")

        setTimeout(function () {
            qrText.classList.remove("error")
        }, 1000)
    }
}