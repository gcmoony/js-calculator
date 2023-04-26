let neonSelect = document.querySelector("#theme3");
let plainSelect = document.querySelector("#theme2");
let blueSelect = document.querySelector("#theme1");

function setTheme(aTheme){
    document.querySelector("#styleTheme").setAttribute("href", "styles/calculator" + aTheme + ".css");
}

neonSelect.addEventListener("click", () => setTheme("Neon"));
blueSelect.addEventListener("click", () => setTheme("Blue"));
plainSelect.addEventListener("click", () => setTheme("White"));