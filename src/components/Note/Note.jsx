import React from 'react';
import "./Note.css";

const Note = (props) => {
    return (
        <div className="note">
        <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={(e) => {
              e.preventDefault();
              if (props.user) {
                props.deleteNote(props.id);
              } else {
                  props.deleteDemoNotes(props.demoNoteId);
              }
              
            }}>DELETE</button> 
            </div>
    )
}

export default Note;
