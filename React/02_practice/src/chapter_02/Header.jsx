import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

const styles={
    nav:{
        display:"flex",
        justifyContent:"space-between",
        width:"100%",
        height:"70px",
        borderBottom:"2px solid rgba(30,30,30,0.2)",
    }
};

function Header(props){
    return(
        <div style={styles.nav}>
            <Logo/>
            <MenuList/>
        </div>
    );
}

export default Header;