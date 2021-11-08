import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Note/Notes";
import CreateArea from "./components/CreateArea/CreateArea";
import Signup from "./Signup/Signup";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from "firebase/compat/app";
import { auth, firestore } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App(props) {

  console.log(auth.currentUser);
  const [note, setNote] = useState("");
  const [modal, setModal] = useState(false);
  

  const signInWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  const signOut = () => {
    auth.signOut();
}

  const [user] = useAuthState(auth);
  
// function addNote(note) {
//   notesRef.add({
//     title: note,
//     content: false,
//     createdAt: firebase.firestore.FieldValue.serverTimestamp()
// })
// }

// Same function, but filter through notes array instead of the notes state.
// function deleteNote(id) {
//   notesRef.doc(id).delete();
// }

function changeModal() {
  setModal(!modal);
}

  return (
    <div>
    
    <Header signOut={signOut}
            user={user}
    />

    {user ? 
      <> 
      <CreateArea 
                changeModal={changeModal}
                user={user}
    />

      <Notes />
      </>
    : 
    <Signup modal={modal}
            changeModal={changeModal}
            signInWithGoogle={signInWithGoogle}
    />
    
    }
  
    
    <Footer />
    </div>
  );
}


export default App;
