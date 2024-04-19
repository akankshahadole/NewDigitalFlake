import React from "react";
import './Logout.css';
import { Link } from 'react-router-dom';

function Logout(){
    return(
        <>
        <div>
        <div className="logoutcontainer">
        
            <p>Log Out</p>
            <p>Are you sure want to Logout?</p>
            <button><Link to="/home" style={{ color: 'black' }}>Cancel</Link></button>
            <button className="btn2"><Link to="/" style={{ color: 'white' }}>Confirm</Link></button>

        </div>
        </div>
        </>
    )
}

export default Logout;