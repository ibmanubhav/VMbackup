// function checkAge(age) {
// if (age >= 18) {
//   return true;
// } else {
//   return confirm('Do you have permission from your parents?');
// }
//return age >= 18 ? true : confirm('Do you have permission');
//     return (age>=18) || true ; confirm('Do you have permission');
//   }

//   let age = prompt('How old are you?', 18);
//   let decision = checkAge(age);
//   if ( decision)  {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }

/*================================================================*/
//Callback Function

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert("You agreed.");
// }
// function showCancel() {
//     alert("You canceled the execution.");
// }
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

/*================================================================*/
// Customobjects

let user ={
    name:'Ram',
    age:30
}
let users=[];
for(let index = 0; index <10; index++){
    let user={
        name:'Ram'+index,
        age:3*index
    }
    users.push(user);
}
console.log(users);
users.sort(function (user1, user2){
    return user2.age - user1.age;
});

var mytable = "<table><tr>";
for (var i=0;i<10;i++) {  mytable += "<td>" + users[i] + "</td>"; }
mytable += "</tr></table>";
document.getElementById("i").innerHTML = mytable;
/*================================================================*/
