import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './home.css'

function Home() {
    return (
        <div id="home">
            <header>
                <h2><strong>RolePlay</strong>.com</h2>
            </header>
            <div className="container">
                <div className="content-container">
                    <h1>We Make Roleplay More Fun</h1>
                    <div className="button-group">
                        <Link to="/" className="button-large">Signup</Link>
                        <Link to="/login" className="button-large">Login</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;