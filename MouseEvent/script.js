let abcd = document.querySelector(".abcd");


// abcd.addEventListener("mouseover", () => {
//     abcd.style.background = "yellow";
// })

// abcd.addEventListener("mouseout", () => {
//     abcd.style.background = "#ff9a9e";
// })

window.addEventListener("mousemove", (e) => {
    abcd.style.top=e.clientY+"px";
    abcd.style.left=e.clientX+"px";
})