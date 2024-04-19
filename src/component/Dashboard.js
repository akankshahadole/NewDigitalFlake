import React from "react";
import Header from "./Header";
import Side from "./Side";
import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <Header />
            <div className="fullcontainer">
                <Side />
                <div className="big">
                    <div className="bigcontent">
                        <p className="big-icon">D</p>
                        <p className="p-up"><b>digital</b>flake</p>
                        <p className="p-down"> Welcome to Digitalflake Admin</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;