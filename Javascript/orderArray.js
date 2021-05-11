let x = +prompt("Enter number of orders")

let orders = [];

for (let i = 0; i < x; i++) {
    let order = {
        itemName: "Laptop" + i,
        price: (100 + (i * 100)),
        pincode: 2000000 + i + (i * 1378)
    }
    orders.push(order);
}
console.log(orders);
displayOrders();


function priceAscending() {
    orders.sort(function (order1, order2) {
        return order1.price - order2.price
    });
    console.log(orders);
    displayOrders();
}

function priceDescending() {
    orders.sort(function (order1, order2) {
        return order2.price - order1.price
    });
    console.log(orders);
    displayOrders();
}

function pincodeAscending() {
    orders.sort(function (order1, order2) {
        return order1.pincode - order2.pincode
    });
    console.log(orders);
    displayOrders();
}

function pincodeDescending() {
    orders.sort(function (order1, order2) {
        return order2.pincode - order1.pincode
    });
    console.log(orders);
    displayOrders();
}

function displayOrders() {
    let ordersPrint = '<tbody>';
    for (let index = 0; index < orders.length; index++) {
        ordersPrint += '<tr>' + '<td>' + orders[index].itemName + '</td>' + '<td>' + orders[index].price + '</td>' + '<td>' + orders[index].pincode + '</td>' + '</tr>';
    }
    ordersPrint += '</tbody>';
    document.getElementById("orders").innerHTML = ordersPrint;
}