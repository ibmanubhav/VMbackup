import { useState } from "react";

export default function Userlist(props){
    // const [users, setUsers] = useState([{name: 'Anubhav', age: 20, mobile: 1234567890}]);
return (
    <ol>
        {props.userProp.map(function(user,index){
            return <li>{user.name}</li>
        })}
    </ol>
)
}
