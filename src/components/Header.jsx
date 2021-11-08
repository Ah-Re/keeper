import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <header>
            <h1>Keeper</h1>
            {props.user ? <p onClick={() => {
                props.signOut();
            }}>Sign out</p> : null}
            
        </header>
        
    )
}

export default Header;