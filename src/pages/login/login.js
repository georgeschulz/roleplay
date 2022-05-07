import React, {useState} from "react";
import './login.css'
import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function login() {
        if(username === "George3" && password === "admin") {
            history.push('/scenario/1')
        } else {
            alert("Incorrect username or password. Please try again or contact your administrator");
        }
    }

    return (
        <div id="login">
            <header>
                <h2><strong>RolePlay</strong>.com</h2>
            </header>
            <div className="container">
                <div className="content-container">
                    <h1>Login</h1>
                    <form className="auth-form">
                        <div className="auth-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="auth" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div className="auth-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="auth" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <button className="button-large" onClick={login}>Login</button>
                    </form>
                </div>
            </div>


        </div>

    )
}

export default Login;