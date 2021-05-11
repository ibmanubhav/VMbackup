var Order = /** @class */ (function () {
    function Order(id, itemName, price, address) {
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.address = address;
    }
    return Order;
}());
var orders = [];
for (var i = 0; i < 10; i++) {
    var order = {
        id: 1233 + "abc" + i,
        itemName: "Laptop" + i,
        price: (100 + (i * 100)),
        address: "India" + 2000000 + i + (i * 1378)
    };
    orders.push(order);
}
console.log(orders);
console.log("Sorted Array");
orders.sort(function (order1, order2) {
    return order2.price - order1.price;
});
console.log(orders);
