import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid nav">
                    <Link class="navbar-brand" to="/">
                        <img src="/logo.png" alt="" width="130" height="42" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active  " aria-current="page" to="/Masterdata">MasterData</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active  " aria-current="page" to="/modal">Modal</Link>
                            </li>
                        
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle  " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reports
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item " to="/revenuereporting">Revenue Reporting</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item  " to="/casereporting">Case reporting</Link></li>
                                </ul>
                            </li>
                              
                           <li class="nav-item">
                                <Link class="nav-link " to="/agent">Agents</Link>
                            </li>
                              <li class="nav-item">
                                <Link class="nav-link " to="/invoice">Invoice</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle  " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </Link>
                               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item  " to="/product">Products</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                     <li><Link class="dropdown-item  " to="/states">States</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item  " to="/cities">Cities</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                   <li><Link class="dropdown-item  " to="/billing">Billing</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item  " to="/admin">Admin</Link></li>
                                </ul>
                            </li> 
                        </ul>
                        
                        <form class="d-flex search-form">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn search-btn" type="submit"> <img src="/search-icon.png" alt="" /></button>
                        </form>
                       <div className="profile">
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="/img-icon.png" alt="" /> Aditya</button>
                        <ul class="dropdown-menu logout-menu">
                            <li><a className="dropdown-item">Logout</a></li>                           
                        </ul>
                        </div>  
                    </div>
                </div>
            </nav>
        </div>
    )
}
