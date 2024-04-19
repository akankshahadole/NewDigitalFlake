import React from "react";
import './MyComponent.css';
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';

function MyComponent({ data }) {
    return (
        <div >
            {data.map((item, index) => (
                <div className="data1" key={index}>
                    <p className="para1">{item.id}</p>
                    <p className="para2">{item.name}</p>
                    <p className="para3">{item.description}</p>
                    <p className="para4">{item.status}</p>
                    <p className="para5">
                    <BsPencilSquare />
                    </p>
                    <p className="para6">
                    <BsTrash3 />
                    </p>

                </div>
            ))}
        </div>
    );
}

export default MyComponent;
