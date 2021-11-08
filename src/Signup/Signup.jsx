import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Signup(props) {

    

    return (
        
        <>
        
        <div className="signup">
        <FontAwesomeIcon icon="times" />
        <i class="fas fa-times" size="3x" onClick={() => {
            props.changeModal()}}></i>
        <button onClick={() => {
            props.signInWithGoogle()
        }} className="google-button">Sign Up with Google</button>
        <p><span>OR</span></p>
        <button onClick={() => {
            props.setDemoUser();
            props.changeModal();
        }} className="demo-button">Demo</button>
        </div>
        
        

        </>
            
        
    )
}

export default Signup;