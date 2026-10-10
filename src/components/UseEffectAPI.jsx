import { useEffect, useState } from "react";

function UseEffectAPI(){
    const[users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    console.log(users)
    return (
        <>
        {
            users.map(user=>(
                <h3 key ={user.id}>{user.name}</h3>
            ))
        }
        </>
    )
}

export default UseEffectAPI;