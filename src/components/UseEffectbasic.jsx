
import { useEffect } from "react";

function UseEffectBasic() {
    useEffect(() => {
        console.log("Effect is called");
    }, []);

    return (
        <div>
            <h1>UseEffect Basic</h1>
            <p>Check the Browser's Console</p>
        </div>
    );
}

export default UseEffectBasic;
