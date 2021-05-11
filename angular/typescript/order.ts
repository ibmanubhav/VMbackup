class Order {
    id: number;
    itemName: String;
    price: number;
    address: String;
    constructor(id: number, itemName: String, price: number, address: String){
        this.id=id;
        this.itemName=itemName;
        this.price=price;
        this.address=address;
    }
}
        const orders = [];
        for (let i = 0; i < 10; i++) {
            let order = {
                id: 1233 + "abc" + i,
                itemName: "Laptop" + i,
                price: (100 + (i * 100)),
                address: "India" + 2000000 + i + (i * 1378)
            }
            orders.push(order);
        } 
        console.log(orders);

        console.log("Sorted Array");

orders.sort(function(order1,order2){
    return order2.price-order1.price;
});
console.log(orders);
