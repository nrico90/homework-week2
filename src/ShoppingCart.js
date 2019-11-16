//module named, with an empty array
class ShoppingCart {
    constructor(items) {
        this.items = []
    }
    
    getItems() {
        return this.items
    }

//The class should have a method cart.addItem(itemName, quantity, price)
//add, push
    addItem(itemName, quantity, price) {
        this.items.push(
        {
           name: itemName,
           quantity: quantity,
           pricePerUnit: price
        })
    }
    
//Calling cart.clear() should remove all items, return an empty array. 
    clear() {
        this.items = []
    }

    //No used..
    // getValueItem() {
    //     return getItems.price * getItems.quantity
    // }

//return the total value of the shopping cart
//the sum of the cost of each cart item = accumulator + the cost of quantity and price, with reduce. 
    total() {
        return this.items.reduce((accumulator, x) => { return accumulator + (x.quantity * x.pricePerUnit)}, 0)
    }

}

module.exports = ShoppingCart