import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

function DashboardContents() {
    const [open, setOpen] = useState(true);
    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Navbar onChange={toggleSidebar} sideBarState={open} />
            <Sidebar onChange={toggleSidebar} sideBarState={open} />
        </div>
    );
}

export default DashboardContents;