import React from "react";
import Header from "./Header";
import Side from "./Side";
import { BsEgg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MyProduct from "./MyProduct";
import './Product.css';
import './gokul.jpeg';

function Product() {
    const newdata = [
        { id: 123, name: "Amul Taaza", packsize: "500 ml", category:"Milk", mrp:"Rs 27", img:"", status: "Active" },
        { id: 124, name: "Gokul Cow", packsize: "500 ml", category:"Milk", mrp:"Rs 27", img:"", status: "Inactive" },
        { id: 125, name: "Shimla Apple", packsize: "1 kg", category:"Fruits",mrp:"Rs 150", img:"", status: "Inactive" }
    ];
    return (
        <>
            <Header />
            <div className="fullcontainer">
                <Side />
                <div className="big">
                    <div className="bigcontent1">
                        <div className="Addcontent">
                            <div className="aese">
                                <BsEgg />
                                <p>Product</p>
                            </div>
                            <input type="text" name="query" placeholder="Search..." />
                            <button><Link to="/addproduct" style={{ color: 'White', textDecoration: 'none' }}>Add New</Link></button>
                        </div>
                    </div>

                    <div className="title1">
                            <p>ID</p>
                            <p>Name</p>
                            <p>Pack Size</p>
                            <p >Category</p>
                            <p>MRP</p>
                            <p>Image</p>
                            <p>Status</p>
                        </div>

                        <div>
                            <MyProduct data={newdata} />
                        </div>

                </div>
            </div>
        </>
    )
}

export default Product;