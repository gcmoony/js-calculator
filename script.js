let buttons = document.getElementsByTagName("input");
for(let button of buttons){
    button.addEventListener("focus", () => {
        console.log(button.value);
    })
}