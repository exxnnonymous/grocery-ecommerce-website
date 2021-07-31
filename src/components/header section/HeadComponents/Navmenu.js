import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Navmenu.css';

function Navmenu() {
    return (
        <Router>
            <div className="nav-menu">
                <ul>
                    <li className="active">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Shop</Link>
                    </li>
                    <li>
                        <Link to="#">Pages</Link>
                    </li>
                    <li>
                        <Link to="#">Blog</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

export default Navmenu;