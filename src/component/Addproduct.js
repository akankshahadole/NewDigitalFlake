import React, { useState } from "react";
import Header from "./Header";
import Side from "./Side";
import { Link } from 'react-router-dom';
import './Addproduct.css';
import { BsArrowLeft } from 'react-icons/bs';

const Dropdown1 = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select className="select1" value={selectedOption} onChange={handleSelectChange}>
            <option value="option1"></option>
            <option value="option1">Milk</option>
            <option value="option2">Fruits</option>

        </select>
    );
};

const Dropdown2 = () => {
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

function Addproduct() {
    return (
        <>
            <Header />
            <div className="fullcontainer">
                <Side />
                <div className="big1">
                    <div className="bigcontent12">
                        <div className="arrow">
                            <BsArrowLeft />
                            <p className="addpro">Addproduct</p>
                        </div>

                        <div className="addcon">
                            <div>
                                <label>Category</label><br></br>
                                <Dropdown1 />
                            </div>
                            <div>
                                <label>Product Name</label><br></br>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Pack Size</label><br></br>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="addcon1">
                            <div>
                                <label>MRP</label><br></br>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Product Image</label><br></br>
                                <input type="file" accept="image/*" />
                                {/* <input type="text" /> */}
                            </div>
                            <div className="Sats">
                                <label>Status</label><br></br>
                                <Dropdown2 />
                               
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
export default Addproduct