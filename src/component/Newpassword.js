import React from "react";
import './Newpassword.css';
function Newpassword(){
    return(
    <div className="Newcontainer">
        <h2>Did you forgot your password?</h2>
        <p>Enter your email address and we'will send you a link to restore password</p>
        <label className="Emm">Email Address</label><br></br>
        <input type="text" /><br></br>
        <button>Request Reset Link</button>
        <p>Back to login</p>
    </div>
    
);}
    export default Newpassword;