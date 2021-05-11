//ES5
var x = function(x,y){
    return x*y;
}

//ES6
const result = (x,y) => x*y;
console.log(result(1,2));

const t =result;
console.log(t(2,3));

//Classes
class User{

    constructor(name,...skills){
        this.name = name;
        this.age;
        this.akills=skills;
    }
    eat(){
        console.log(this.name+' is eating');
        console.log(`${this.name} is eating`); // String Interpolation
    }

    work (desiredSkill){
        this.skills.forEach(skill=>{
            if(skill == desiredSkill){
                console.log(`${this.name} is working on ${this.desiredSkills}`)
            }
        })
        console.log(this.skills)
    }
}
const u1 = new User('Ram','java','spring','mysql');
console.log(u1.name);

u1.age=20;
console.log(u1.age);