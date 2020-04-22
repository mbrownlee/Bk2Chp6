/*const pet = {
    name: "Angus",
    breed: "dog",
    nicknames: ["Goose", "Monk Puppy"],
    age: 13,
    bark: function () {
        window.alert("Angus barks 'WOOF!' at everything")
    },
    pant: function () {
        window.alert("Angus has stinky breath")
    },
    out: function() {
        window.alert("Angus wants to go out.")
    },
    favoriteToys: [],
    play: function (toy) {
        if(toy === ball) {
            this.favoriteToys.push(toy) }
    }
}

pet.bark()
pet.pant()
pet.out()
*/
const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    getOrders: function () {
        console.table(this.orders)
    }
    
}

const chickenComboMeal = {
    sandwich: "Chicken Club",
    fries: true,
    drinkSize: "medium"
}
const fishComboMeal = {
    sandwich: "Blackened Fish Sandwich",
    fries: false,
    drinkSize: "small"
}
const bbqComboMeal = {
    sandwich: "Pulled Pork",
    fries: true,
    drinkSize: "large"
}

// Place an order
restaurant.placeOrder(fishComboMeal)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
