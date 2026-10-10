import {useState} from "react";
function Input(){
    const [user, setUser] = useState("");
    return(
        <>
        <h1>Input Component</h1>
        input: <input type="text" onChange ={(e)=>{
            setUser(e.target.value)}} />
        <h2>{user}</h2>
        </>
    )
}

export default Input;