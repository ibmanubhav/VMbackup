// Switch Case
// let a = 2 + 2;
// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;

}
// let a = +prompt('a?', '');
// if (a == 0) {
    // alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }

/*================================================================*/
//Function
let userName = 'John';
function showMessage() {
    userName = "Bob"; 
    let message = 'Hello, ' + userName;
    alert(message);
}
alert(userName); 
showMessage();
alert(userName); 