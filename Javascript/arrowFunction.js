//Arrow Function

// const outer = function(){   // normal function
//     return 1;
// }


// const outer = ()=>{
//     return 1
// }


const outer = () => 1;  // arow function with one line of code
const result = outer();
console.log(result);


/*================================================================*/
//Function context

// const user = {
//     name: "Ram",
//     eat: function () {
//         console.log(this); //this keyword points to the owner of object of function and in this cast default owner is window
//     }
// }

const user = {
    name: "Ram",
    eat:  ()=> {
        console.log(this); //while using arrow function default context is window
    }
}

user.eat();
//change the context temporarily with call()
user.eat.call({ name: 'John' });
user.eat();
user.eat.call({ name: 'bob' });
//change the context permanently with bind()
user.eat();
user.eat = user.eat.bind({ name: 'Rahim' });
user.eat();

// function foo() {
//     console.log(this);
// }
// foo();
// const a=1;