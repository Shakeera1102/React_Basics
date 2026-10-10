import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function Decrement(){
        if(count >0){
            return count-1;
        }
        else{
            return 0;
        }
    }
    return(
       <div>
           <h2>Count: {count}</h2>
           <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(Decrement)}>Decrement</button>
           <button onClick= {() => setCount(0)}>Reset</button>
       </div>
    )
}

export default Counter;