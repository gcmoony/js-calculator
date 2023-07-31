let buttons = document.getElementsByTagName("input");
let theme = document.getElementById("theme");
buttons[0].value = "calculatorBlue";
buttons[1].value = "calculatorWhite";
buttons[2].value = "calculatorNeon";

for(let btn of buttons) {
    btn.addEventListener("focus", () => {
        theme.href = `./style/${btn.value}.css`;
    })
}