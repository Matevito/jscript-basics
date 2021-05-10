import {menu_items} from "./food"

function menu_element(){
    let menu = document.createElement("button");
    menu.textContent = "MENU";
    menu.classList.add("tab_btn");
    menu.addEventListener("click", () => {
        menu_event()
    });
    return menu
};

function print_menu(){
    //array with the food as objects. //  a copy of the menu!
    let food_items = menu_items;

    //objective: return display
    let display = document.createElement("div");
    display.setAttribute("id", "tab_info");

    let menu_message = document.createElement("h2");
    menu_message.textContent = "MENU";
    display.appendChild(menu_message);
    // to erase?: let info = document.createElement("div");
    for (let item of food_items){

        let cell_item = document.createElement("tr");
        cell_item.classList.add("food_cell")

        //create the dom elements and append them in the cell item
        let name_cell = document.createElement("td");
        name_cell.textContent = item.name;
        name_cell.classList.add("name_cell")
        cell_item.appendChild(name_cell);

        let description_cell = document.createElement("td");
        description_cell.textContent = item.description;
        description_cell.classList.add("description_cell")
        cell_item.appendChild(description_cell)

        let  price_cell = document.createElement("td");
        price_cell.textContent = item.price_text();
        price_cell.classList.add("price_cell")
        cell_item.appendChild(price_cell);

        //todo: insert images?

        //apend the cell into the display
        display.appendChild(cell_item)
    }

    return display;
}

function menu_event(){
        // code to remove current displayed tab_info
        let container_ = document.querySelector("#content");
        container_.removeChild(document.getElementById("tab_info"));

        //rest of code:
        let display = print_menu();

        let info = document.createElement("div");
        display.appendChild(info);
        container_.appendChild(display);
}

export {menu_element}