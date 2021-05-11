var a = 1; //implicit datatype
// let a:number = 1; ///explicit datatype
// a=true;
var b; //any
b = 12;
// const firstname:string='John';
function add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
// function add(a:number, b:number):number{
//     return a+b
// }
var result = add(2);
console.log(result);
// add('2',3);
// const divide=(a:number,b:number)=> a/b;
// console.log(divide(4,2));
// function math(callback:Function, a, b){
//     return callback(a,b);
// }
// console.log(math(add, 2,4));
