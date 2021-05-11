const numbers :number[]= [4,6,-1,1];
// numbers.push('1'); //type safety

// const sum =numbers.reduce(function(previous, current){
//     return previous+current;
// })
// console.log(sum);

const sum=numbers.reduce((previous, current) => { 
    return previous+current;
});
console.log(sum);

numbers.sort(function(number1:number,number2:number){
    return number1 -number2;
})
console.log(numbers);

const updateNumbers = numbers.map(function(element){
    return element +10
});
console.log(updateNumbers); //map, increse all the numbers by 10