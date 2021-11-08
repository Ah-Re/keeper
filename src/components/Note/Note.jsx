import React from 'react';
import "./Note.css";

const Note = (props) => {
    return (
        <div className="note">
        <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={(e) => {
              e.preventDefault();
              props.deleteNote(props.id);
            }}>DELETE</button> 
            </div>
    )
}

export default Note;
