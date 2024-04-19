import React from "react";
import { FaHome } from 'react-icons/fa';
import { BiCaretRight } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Side(){
    return(
        <>
        <div className="smallc">
                    <div className="first">
                        <div className="smallright">

                            <FaHome />
                            <p className="item"><Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Home</Link></p>
                        </div>
                        <BiCaretRight />
                    </div>
                    <div className="second">
                        <div className="smallright">
                            <BiCategory />
                            <p className="item"><Link to="/category" style={{ color: 'black', textDecoration: 'none' }}>Category</Link></p>
                        </div>
                        <BiCaretRight />

                    </div>
                    <div className="third">
                        <div className="smallright">
                            <FaHome />
                            <p className="item"><Link to="/product" style={{ color: 'black', textDecoration: 'none' }}>Product</Link></p>
                        </div>
                        <BiCaretRight />
                    </div>
                </div>
        </>
    )
}

export default Side;