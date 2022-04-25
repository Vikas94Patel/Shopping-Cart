import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
    
    return(
        <React.Fragment>
        <Topbar />
        <Navbar />
        </React.Fragment>
    );

};

export default Header;