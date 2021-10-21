import React from "react";
import "./Signup.css";
import { signInWithGoogle } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Signup() {
    return (
        <div className="signup">
        <FontAwesomeIcon icon="times" />
        <i class="fas fa-times" size="3x"></i>
        <button onClick={signInWithGoogle} className="google-button">Sign Up with Google</button>
        <p><span>OR</span></p>
        <button className="demo-button">Demo</button>
            
        </div>
    )
}

export default Signup;