import React, { useState } from "react";
import "./Note.css";

function Note(props) {

 

    return (
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={(e) => {
              e.preventDefault();
              props.deleteNote(props.id);
            }}>DELETE</button>
        </div>
    );
};

export default Note;