function loadHeadline(board){
    let headline = document.createElement("div");

    let logo = document.createElement("img");
    logo.src = "../src/images/logo.png";

    let header_name = document.createElement("div");
    header_name.textContent = "Aury Desserts"

    headline.appendChild(logo);
    headline.appendChild(header_name);

    //headline.textContent = "Aury Desserts";
    //todo: print restaurant logo and other shit
    board.appendChild(headline);
}

export {loadHeadline}