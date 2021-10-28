import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note/Note";
import CreateArea from "./components/CreateArea/CreateArea";
import Signup from "./Signup/Signup";
import firebase from "./firebase";






function App(props) {

  
  
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [modal, setModal] = useState(false);


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      
    })
  }, [])
  

  
  
function addNote(note) {
  setNotes(prevValue => {
   return [...prevValue, note]
  })
}

function deleteNote(noteId) {
  setNotes(prevValue => {
    return prevValue.filter((note, index) => {
      return index !== noteId;
    })
  })
}

function changeModal() {
  setModal(!modal);
}

function setDemoUser() {
  setUser("demo");
}
  




  return (
    <div>
    
   
    <Header />
    {/* <Login /> */}
    <Signup modal={modal}
            changeModal={changeModal}
            setDemoUser={setDemoUser}
    />
    <CreateArea addNote={addNote}
                changeModal={changeModal}
                user={user}
    />
   
    {notes.map((note, index) => {
      return <Note  deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content} />
    })} 
    
  
    {/* <Header />
    <CreateArea addNote={addNote}/>
   
    {notes.map((note, index) => {
      return <Note  deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content} />
    })} 
    
    <Signup /> */}

   
    

    
    
    
    
    <Footer />
    </div>
  );
}


export default App;
