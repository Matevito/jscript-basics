const get_imageSlider = () => {
    let slider_container = document.createElement("div");
    slider_container.setAttribute("id", "slider_container")
    let left_btn  = document.createElement("button")
    left_btn.textContent = "left";
    let right_btn = document.createElement("button");
    right_btn.textContent = "right";

    let image_container = document.createElement("div");
    image_container.setAttribute("id", "images")
    append_images(image_container)

    //code goes here
    let counter = 0;
    const imgs_size = 300;

    right_btn.addEventListener("click", () => {
        if (counter<5){
            counter++;
            image_container.style.transition = "transform 0.4s ease-in-out"
            image_container.style.transform = "translateX("+ (-imgs_size*counter)+"px)";
        }
    });

    left_btn.addEventListener("click", () => {
        if (counter > 0){
            counter-= 1;
            image_container.style.transition = "transform 0.4s ease-in-out"
            image_container.style.transform = "translateX("+ (-imgs_size*counter)+"px)";
        }
    })
    
    slider_container.appendChild(image_container);
    slider_container.appendChild(left_btn);
    slider_container.appendChild(right_btn);
    
    return slider_container;
}
const append_images = (container) => {
    for(i = 1; i<=6; i++){
        image_path = "images/"+i+".jpeg"
        let piano_image = document.createElement("img");
        piano_image.setAttribute("src", image_path);
        piano_image.setAttribute("width", "300px")
        container.appendChild(piano_image)
    }
}

//put the image_slider on the container
let container = document.getElementById("container");
let image_slider = get_imageSlider();
container.appendChild(image_slider);
