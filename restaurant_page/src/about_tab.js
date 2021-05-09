function about_element(){
    let about = document.createElement("button");
    about.textContent = "ABOUT";
    about.classList.add("tab_btn");
    about.addEventListener("click", () => {
        // code to remove current displayed tab_info
        let container_ = document.querySelector("#content");
        container_.removeChild(document.getElementById("tab_info"));

        //rest of code:
        let display = document.createElement("div");
        display.setAttribute("id", "tab_info");
        let info = document.createElement("div");

        //todo: code of about
        info.textContent = "About";


        display.appendChild(info);
        container_.appendChild(display)
    });
    return about
};

//function of the ABOUT displayed info

export {about_element}