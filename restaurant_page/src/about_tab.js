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

        let title = document.createElement("h2");
        title.textContent = "ABOUT US";
        let about_content = document.createElement("div");
        about_content.textContent = about_text1;

        //todo: add images

        let direction = document.createElement("div");
        direction.setAttribute("id", "direction_card");
        
        let city = document.createElement("h3");
        city.textContent = "Bogotá, Colombia";
        let ubication = document.createElement("div");
        ubication.textContent = about_text2;
        let number = document.createElement("div");
        number.textContent = number_

        direction.appendChild(city);
        direction.appendChild(ubication);
        direction.appendChild(number);
        // end

        display.appendChild(title);
        display.appendChild(about_content);
        display.appendChild(direction);

        container_.appendChild(display);
    });
    return about
};

let about_text1 = "Aury desserts it's a dream that became a reality 20 years ago in bogotá. It took inspiration from aury mother who was a recognized cooker in Cartagena (owner of the recognized Arco Iris bakery). The tradition of the family bussines took Aury to continue her legacy with the recipes of her mother and grandmother."
let about_text2 = "Cra. 11a#95-15"
let number_ = "Tel:(57)031 927 79 56."
//function of the ABOUT displayed info

export {about_element}