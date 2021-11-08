import React, { useState } from "react";
import { auth, firestore } from "../../firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Note from "./Note";


function Notes(props) {
    const notesRef = firestore.collection(`users/${auth.currentUser.uid}/notes`);
    const [notes] = useCollectionData(notesRef, { idField: "id"});

    function deleteNote(id) {
  notesRef.doc(id).delete();
}

 

    return (
        <>

        {notes && notes.map((note) => {
            return (
            <Note title={note.title} content={note.content} id={note.id} deleteNote={deleteNote}/>
            
            
            

            )})}
            
        </>
    );
};

export default Notes;