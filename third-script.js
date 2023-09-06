let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function (event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

main.addEventListener("mouseenter", function () {
    cursor.style.display = "block";
});

main.addEventListener("mouseleave", function () {
    cursor.style.display = "none";
});
