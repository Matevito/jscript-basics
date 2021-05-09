function menu_element(){
    let menu = document.createElement("button");
    menu.textContent = "MENU";
    menu.classList.add("tab_btn");
    menu.addEventListener("click", () => {
        // code to remove current displayed tab_info
        let container_ = document.querySelector("#content");
        container_.removeChild(document.getElementById("tab_info"));

        //rest of code:
        let display = document.createElement("div");
        display.setAttribute("id", "tab_info");
        let info = document.createElement("div");
        //todo: code of home
        info.textContent = "Menu";


        display.appendChild(info);
        container_.appendChild(display)
    });
    return menu
};

//function of the menu displayed info

export {menu_element}