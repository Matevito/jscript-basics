function home_element(){
    let home = document.createElement("button");
    home.textContent = "HOME"
    home.classList.add("tab_btn")
    home.addEventListener("click", () => {
        // code to remove current displayed tab_info
        let container_ = document.querySelector("#content")
        container_.removeChild(document.getElementById("tab_info"))

        let display = document.createElement("div");
        display.setAttribute("id", "tab_info");
        let info = document.createElement("div");
        //todo: code of home
        info.textContent = "Home";


        display.appendChild(info);
        container_.appendChild(display)
    })
    return home

}

export {home_element}