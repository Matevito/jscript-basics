const get_imageSlider = () => {
    let slider_container = document.createElement("div");
    let left_btn  = document.createElement("button")
    left_btn.textContent = "left";
    let right_btn = document.createElement("button");
    right_btn.textContent = "right";
    let image_container = document.createElement("div");
    
    slider_container.appendChild(left_btn);
    slider_container.appendChild(image_container);
    slider_container.appendChild(right_btn);
    
    return slider_container;
}

//put the image_slider on the container
let container = document.getElementById("container");
let image_slider = get_imageSlider();
container.appendChild(image_slider);