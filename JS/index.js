const body = document.querySelector("#body");
const dropdown = document.querySelector(".dropdown");


const changeColor = () => {
    let color = dropdown.value;
    body.style.backgroundColor = color;
}
changeColor()