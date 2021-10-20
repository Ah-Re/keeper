import React, { useState } from "react";
import "./CreateArea.css";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

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

    return (
        <form>
            <input className="title-input" onChange={handleChange} name="title" placeholder="Title" type="text"></input>
            <textarea className="content-input" onChange={handleChange} placeholder="Content" name="content"></textarea>
            <button className="add-button" onClick={(e) => {
                e.preventDefault();
                props.addNote(note);
            }}>Add</button>
        </form>
    )
}

export default CreateArea;