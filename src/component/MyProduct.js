import React from "react";
import './MyProduct.css';
import { BsPencilSquare } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';

function MyProduct({ data }) {
    return (
        <div >
            {data.map((item, index) => (
                <div className="data1" key={index}>
                    <p className="para11">{item.id}</p>
                    <p className="para22">{item.name}</p>
                    <p className="para33">{item.packsize}</p>
                    <p className="para44">{item.category}</p>
                    <p className="para55">{item.mrp}</p>
                    <p className="para66">{item.img}</p>
                    <p className="para77">{item.status}</p>
                    <p className="para88">
                    <BsPencilSquare />
                    </p>
                    <p className="para99">
                    <BsTrash3 />
                    </p>

                </div>
            ))}
        </div>
    );
}

export default MyProduct;
