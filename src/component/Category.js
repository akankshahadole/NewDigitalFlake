import React from "react";
import Header from "./Header";
import Side from "./Side";
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MyComponent from "./MyComponent";
import './Category.css';
function Category() {
    const data = [
        { id: 123, name: "Milk", description: "Lorem lpusn is simply dummy text", status: "Active" },
        { id: 124, name: "Fruits", description: "Lorem lpusn is simply dummy text", status: "Active" },
        { id: 125, name: "Vegetables", description: "Lorem lpusn is simply dummy text", status: "Inactive" }
    ];
    return (
        <>
            <Header />
            <div className="fullcontainer">
                <Side />
                <div className="big1">
                    <div className="bigcontent1">
                        <div className="Addcontent">
                            <div className="aese">
                                <BiCategory />
                                <p className="cat">Category</p>
                            </div>
                            <input type="text" name="query" placeholder="Search..." />
                            <button><Link to="/addcategory" style={{ color: 'White', textDecoration: 'none' }}>Add New</Link></button>
                        </div>

                        <div className="title">
                            <p>ID</p>
                            <p>Name</p>
                            <p>Descriptionv</p>
                            <p className="sts">Status</p>
                        </div>

                        <div>
                            <MyComponent data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;