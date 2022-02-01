const tlo = document.body;
const rgb = document.getElementById("rgb");
const btn = document.getElementById("btn");

window.onload = () => {
    const r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    tlo.style.backgroundColor = `rgb(${g}, ${g}, ${b})`;
    rgb.innerText = tlo.style.backgroundColor;
}

btn.addEventListener("click", ()=>{
    const r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

    tlo.style.backgroundColor = `rgb(${g}, ${g}, ${b})`;
    rgb.innerText = tlo.style.backgroundColor;
    console.log(`${g}, ${g}, ${b}`);
})

