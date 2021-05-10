class Food{
    constructor(name,description, price){
        this.name = name;
        this.description = description;
        this.price = price;
    }
    
    price_text(){
        return "$ "+ this.price
    }
}

//put menu database here
let menu_items = []

let cookies_description = "Delicious cookie with chocolate chips and nuts.";
let cookies = new Food("Choco-cookies", cookies_description , 3500);
menu_items.push(cookies);

let pionono_description = "Milk soft cake  filled with cinnamon cream.";
let pionono = new Food("Pionono roll", pionono_description, 3100);
menu_items.push(pionono);

let tiramisu_description = "Italian dessert composed of soft cake, coffe and mascarpone cream."
let tiramisu = new Food("Tiramisu", tiramisu_description, 8500);
menu_items.push(tiramisu);

let belewe_description = "Liban dessert of phyllo dough, nuts and honey."
let belewe = new Food("Belewe", belewe_description, 5200);
menu_items.push(belewe);

let CheeseCake_description = "Classic new-york style cheesecake with a scennt of red fruits."
let CheeseCake = new Food("Cheesecake", CheeseCake_description, 7500);
menu_items.push(CheeseCake);

export {menu_items}