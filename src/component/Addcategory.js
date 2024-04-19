import React, { useState } from "react";
import Side from "./Side";
import Header from "./Header";
import './Addcategory.css';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

// Define Dropdown component outside of Addcategory function
const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select className="select1" value={selectedOption} onChange={handleSelectChange}>
             <option value="option1"></option>
            <option value="option1">Active</option>
            <option value="option2">Inactive</option>

        </select>
    );
};

function Addcategory() {
    return (
        <>
            <Header />
            <div className="fullcontainer">
                <Side />
                <div className="big1">
                    <div className="bigcontent11">
                        <div className="arrow">
                        <BsArrowLeft />
                            <p className="adcat"> Addcategory</p>
                        </div>
                        <div className="addcon">
                            <div>
                                <label>Category Name</label><br></br>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Description</label><br></br>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Satus</label><br></br>
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <button><Link to="/addcategory" style={{ color: 'black', textDecoration: 'none' }}>Cancel</Link></button>
                        <button className="savingbtn"><Link to="/category" style={{ color: 'White', textDecoration: 'none' }}>save</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addcategory;
