function home_element(){
    let home = document.createElement("button");
    home.textContent = "HOME"
    home.addEventListener("click", () => {
        display = document.getElementById("tab_info");
        info = document.createElement("div")
        info.textContent = "Home";
        display.appendChild(info);
    })
    return home
}

export {home_element}