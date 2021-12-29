import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid nav">
                    <Link to="/agent" class="navbar-brand">
                        <img src="./fixmylaptop 1.png" alt="" width="130" height="42" />
                    </Link>



                    <button class="btn search-btn" type="submit"> <img src="./search-icon.png" alt="" /></button>

                    <div className="profile">
                        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="./img.png" alt="" /> Aditya</button>
                        <ul class="dropdown-menu logout-menu">
                            <li><Link to="/" class="dropdown-item">Logout</Link></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
        );
    }
}

export default Header;