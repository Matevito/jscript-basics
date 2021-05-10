class Food{
    constructor(name,description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    
    name(){
        return this.name
    }

    description(){
        return this.description
    }

    price(){
        return "$ "+ this.price
    }
}

//put menu database here
let menu_items = []

let cookies_description = "Delicious cookies with chocolate chips";
let cookies = new Food("Choco-cookies!", cookies_description , 3500);
menu_items.push(cookies);

let pionono_description = "Milk soft cake  filled with cinnamon cream.";
let pionono = new Food("Pionono roll", pionono_description, 3100);
menu_items.push(pionono);


export {menu_items}