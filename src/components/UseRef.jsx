import { useRef } from "react";
function FocusInput(){
    // useRef() creates a reference called inputRef
    const inputRef = useRef();
    function HandleFocus(){
        inputRef.current.focus();
    }
    return(
        <>
        // ref is used to accesss the DOM Element directly
        // ref = {inputRef} is used to create/connect a reference to the input element
        <input ref ={inputRef} />
        <button onclick ={HandleFocus}>
            Focus Input
        </button>
        </>
    )
}

export default FocusInput;