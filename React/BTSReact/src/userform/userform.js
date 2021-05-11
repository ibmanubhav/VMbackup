import { useState } from "react";
import axios from "axios";
import Userlist from "../userlist/userlist";


function Userform() { //component, controller
    //model
    const [userform, setUserform] = useState({
        name: 'Ram',
        age: 20,
        mobile: 9999999999
    });
    const [users, setUsers] = useState([{name:"Anubhav", age: 20, mobile:1234567890}])
    const save = function (event) {
        console.log(userform.name);
        console.log(userform.age);
        console.log(userform.mobile);


        axios //fetch
            .post('http://localhost:8081/user', userform)

            .then(function (response) {
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (//view , JSX
        <div>
            <input value={userform.name} name="name" onChange={updateState}></input>
            <input value={userform.age} name="age" onChange={updateState}></input>
            <input value={userform.mobile} name="mobile" onChange={updateState}></input>
            <button onClick={save}>Save</button>
            <Userlist userProp={users}></Userlist>
        </div>
    )

    function updateState(event) {
        const current = {
            ...userform, //spread operator
            [event.target.name]: event.target.value
        };
        console.log(current);
        setUserform(current);


    }

}


export default Userform;
