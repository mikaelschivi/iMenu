
// helper para o carrinho de compras
module.exports = function Cart( cart ){
    this.items = cart.items || {};
    this.quantity = cart.quantity || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.quantity++;
        this.totalPrice += cartItem.item.price;
    };

    this.reduceOne = funtion(id) {
        this.items[id].quantity--;
        this.items[id].price -= this.items[id].item.price;
        this.quantity--;
        this.totalPrice -= this.items[id].item.price;

        if (this.items[id].quantity <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function(id) {
        this.quantity -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    this.generateArray = function() {
        var arr = [];
        for (let id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
}