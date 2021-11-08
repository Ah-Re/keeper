import React, { useState } from "react";
import "./CreateArea.css";
import { auth, firestore } from "../../firebase";
import firebase from "firebase/compat/app";



function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const notesRef = firestore.collection(`users/${auth.currentUser.uid}/notes`);


    function handleChange(e) {
        
        const {name, value} = e.target;
        if (name === "title") {
            setNote(prevValue => ({
                title: value,
                content: prevValue.content
            }))
        } else if (name === "content") {
            setNote(prevValue => ({
                title: prevValue.title,
                content: value
            }))
        }
        
    }

    function addNote(note) {
  notesRef.add({
    title: note.title,
    content: note.content,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
})
}

    return (
        <form>
            <input className="title-input" onChange={handleChange} name="title" placeholder="Title" type="text"></input>
            <textarea className="content-input" onChange={handleChange} placeholder="Content" name="content"></textarea>
            <button className="add-button" onClick={(e) => {
                e.preventDefault();
                if (props.user) {
                    console.log(props.user);
                    addNote(note);
                } else {
                    console.log(props.user);
                    props.changeModal();
                }
                
                
            }}>Add</button>
        </form>
    )
}

export default CreateArea;