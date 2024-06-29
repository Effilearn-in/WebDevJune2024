let scrollContainer = document.querySelector(".gallery");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

next.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})

prev.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
})