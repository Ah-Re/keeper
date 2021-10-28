import React, { useState } from "react";
import "./Signup.css";
import { signInWithGoogle } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Signup(props) {

    return (
        
        <>
        {props.modal ? 
        (<div className="signup">
        <FontAwesomeIcon icon="times" />
        <i class="fas fa-times" size="3x" onClick={() => {
            props.changeModal()}}></i>
        <button onClick={signInWithGoogle} className="google-button">Sign Up with Google</button>
        <p><span>OR</span></p>
        <button onClick={() => {
            props.setDemoUser();
            props.changeModal();
        }} className="demo-button">Demo</button>
        </div>)
        
        : null}

        </>
            
        
    )
}

export default Signup;