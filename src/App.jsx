import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note/Note";
import CreateArea from "./components/CreateArea/CreateArea";
import notes from "./notes";

function App() {
  
  const [notes, setNotes] = useState([]);
  
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
  


  return (
    <div>
    <Header />
    <CreateArea addNote={addNote}/>
   
    {notes.map((note, index) => {
      return <Note  deleteNote={deleteNote} key={index} id={index} title={note.title} content={note.content} />
    })}


    
    <Footer />
    </div>
  );
}

export default App;
