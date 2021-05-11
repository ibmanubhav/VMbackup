//objects
//var -- avoid
let user = "Anubhav";
console.log(user.length);
console.log(user);
let user1 = user.concat('Singh');
console.log(user); //immutable String
console.log(user1);

/*================================================================*/
//custom objects
let a = 1; //no primitive class //numbers
console.log(a.toString());
let age = 12.2; //numbers

let order = {   //JSON Object
    "Item": "Laptop",
    price: 34.7,
    address: {
        street: "1st Main",
        city: 'Delhi',
        PIn: 536363
    }
}
console.log(order);

/*================================================================*/

//Arrays
let numbers = [1, 2, 65, -67, -97, , 10, 45, -76, 100];

//Sorting
// numbers.sort(function(value1, value2){
//     return value1 - value2;
// });
// console.log(numbers);

/*================================================================*/
//Modify
numbers.push(34);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.splice(4, 2);
console.log(numbers);

/*================================================================*/
//For Loop

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);  
// }
numbers.forEach(function (element) {
    console.log(element);

});

/*================================================================*/
// Using Break Keyword
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// alert('Sum: ' + sum);

/*================================================================*/
//Using Continue Keyword
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }