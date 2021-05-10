function home_element(){
    let home = document.createElement("button");
    home.textContent = "HOME"
    home.classList.add("tab_btn")
    home.addEventListener("click", () => {
        // code to remove current displayed tab_info
        home_event()
    })
    return home

}
//todo: get the home_text var from a .txt in a folder
let home_text = "The traditional recipes of family elaborated by Aury. They come with a mix of innovative flavors that we have found in our culinary continous learning, wich make our product, the best for many.";
function home_event(){
    // code to remove current displayed tab_info
    let container_ = document.querySelector("#content");
    container_.removeChild(document.getElementById("tab_info"));

    let display = document.createElement("div");
    display.setAttribute("id", "tab_info");

    let title = document.createElement("h2");
    title.textContent = "HOME";

    let message = document.createElement("div");
    message.textContent = home_text;

    //todo:image
    display.appendChild(title);
    display.appendChild(message);
    container_.appendChild(display)
}
export {
    home_element,
    home_event}