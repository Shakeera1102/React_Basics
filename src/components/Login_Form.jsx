
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validation() {

        if (!email.includes('@')) {
            alert("Enter proper email");
            return false;
        }

        alert("Form Submitted Successfully");
        return true;
    }

    return (
        <div>
            <h1>Login Form</h1>

            Email:
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            Password:
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button onClick={validation}>
                Submit
            </button>
        </div>
    );
}

export default Login;
