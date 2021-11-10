import React, { useState } from "react";
import { auth, firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Note from "./Note";


function Notes(props) {

    const notesRef = props.user ? firestore.collection(`users/${auth.currentUser.uid}/notes`) : null;
    const [notes] = useCollectionData(notesRef, { idField: "id"});

    const notesArray = props.user ? notes : props.demoNotes;

    function deleteNote(id) {
  notesRef.doc(id).delete();
}

 

    return (
        <>

         
        {notesArray && notesArray.map((note, index) => {
            return (
            <Note title={note.title} content={note.content} id={note.id} demoNoteId={index} deleteDemoNotes={props.deleteDemoNotes} user={props.user} deleteNote={deleteNote}/>
            
            
            

            )})} 

            
            
            
        </>
    );
};

export default Notes;