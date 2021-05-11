var numbers = [4, 6, -1, 1];
// numbers.push('1'); //type safety
// const sum =numbers.reduce(function(previous, current){
//     return previous+current;
// })
// console.log(sum);
var sum = numbers.reduce(function (previous, current) {
    return previous + current;
});
console.log(sum);
numbers.sort(function (number1, number2) {
    return number1 - number2;
});
console.log(numbers);
var updateNumbers = numbers.map(function (element) {
    return element + 10;
});
console.log(updateNumbers); //map, increse all the numbers by 10
