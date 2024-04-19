import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
function Header(){
    return(
        <div className="bigcontainer">
            <div className="left">
                <h1>D</h1>
                <p><b>digital</b>flake</p>
            </div>
            <div><Link to="/logout" style={{ color: 'white' }}><BsPersonCircle/></Link>
                
            </div>
        </div>
    )
}
export default Header;