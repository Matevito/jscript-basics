import {home_element} from "./home_tab";
import {menu_element} from "./menu_tab";
import {about_element} from "./about_tab";

function loadTabs(board){
    //1. put tabs
    let tab_container = document.createElement("div")
    tab_container.classList.add("tab");

    //2. div where tab info is displayed
    let tab_info = document.createElement("div");
    tab_info.setAttribute("id", "tab_info");

    //3. events of tabs
    let home_tab = home_element();
    tab_container.appendChild(home_tab);
    //

    let menu_tab = menu_element();
    tab_container.appendChild(menu_tab);
    //

    let about_tab = about_element();
    tab_container.appendChild(about_tab);

    //append the elements in the dom
    board.appendChild(tab_container);
    board.appendChild(tab_info);

    //4. run home-tab.
}
export {loadTabs}