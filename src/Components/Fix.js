import React from 'react';
import { Link } from 'react-router-dom';

const Fix = () => {
    return (
        <div style={{ backgroundImage: "url(./Images/background.jpg)" }}>
        <div className="container">
            <div className="logincont">
                <div className="loginside">
                    <div class="leftside" style={{ backgroundImage: "url(./Images/login.jpg)" }}>
                        <img src="./Images/logo-white 1.png"/>
                    </div>
                    <div className="rightside">
                        <div className="loghead text-uppercase">Welcome Back</div>
                        <h3 >Log in to your Account</h3>
                        <form className="login-form">
                            <input type="email" placeholder="Email Id" style={{ backgroundImage: "url(./Images/admin.png)" }} />
                            <input type="password" placeholder="Password" style={{ backgroundImage: "url(./Images/pass.png)" }} />
                           <Link to="/agent"> <button type="submit">log in</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Fix;