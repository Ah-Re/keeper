import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <header>
            <h1>Keeper</h1>
            {props.user || props.demoUser ? <p onClick={() => {
                props.user ? props.signOut() : props.resetDemoUser();
            }}>Sign out</p> : null}
            
        </header>
        
    )
}

export default Header;