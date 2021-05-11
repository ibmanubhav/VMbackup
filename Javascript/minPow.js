function min(a, b) {
    let i = +prompt("Enter a number", '');
    let j = +prompt("Enter a number", '');
    if (i > j) {
        alert("First is greater");
    } else {
        alert("Second is greater");
    }
}
min("First Number", "Second Number");

/*================================================================*/

function pow(x, n) {
    if (n != 0)
        return Math.pow(x, n);
    else if (n == 0 || x == 0)
        return 1;
}
let x = +prompt("Power", '');
let n = +prompt("Exponent", '');
let result = pow(x,n);
alert(result);