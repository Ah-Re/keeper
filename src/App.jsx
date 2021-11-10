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

  
  const [note, setNote] = useState("");
  const [modal, setModal] = useState(false);
  const [demoUser, setDemoUser] = useState("");
  const [demoNotes, setDemoNotes] = useState([]);

  const signInWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  const signOut = () => {
    auth.signOut();
}

  const [user] = useAuthState(auth);
  
  function addDemoNote(note) {
    setDemoNotes((prevValue) => {
      return [...prevValue, note]
    })

    console.log(demoNotes);

  }

  function resetDemoUser() {
    setDemoUser("");
    setDemoNotes([]);
  }

  function deleteDemoNotes(noteId) {
    setDemoNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== noteId;
      })
    })
  }

  

function changeModal() {
  setModal(!modal);
}

  return (
    <div>
    
    <Header signOut={signOut}
            user={user}
            demoUser={demoUser}
            resetDemoUser={resetDemoUser}
    />

    {user || demoUser ?
      <> 
      <CreateArea 
                changeModal={changeModal}
                user={user}
                demoUser={demoUser}
                addDemoNote={addDemoNote}
    />

      <Notes demoUser={demoUser}
              demoNotes={demoNotes}
              user={user}
              deleteDemoNotes={deleteDemoNotes}
      />
      </>
    : 
    <Signup modal={modal}
            changeModal={changeModal}
            signInWithGoogle={signInWithGoogle}
            setDemoUser={setDemoUser}
    />
    
    }

    
  
    
    <Footer />
    </div>
  );
}


export default App;
