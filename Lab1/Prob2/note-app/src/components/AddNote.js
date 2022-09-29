import { useState } from "react";

const AddNote = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');

    const titleHandler = (event) => {
        console.log(event.target.value);
    }

    const textHandler = (event) => {
        console.log(event.target.value);
    }

    const colourHandler = (event) => {
        console.log(event.target.value);
    }

    return(
        <div className="note add-note">
            <input type="text" placeholder="Note Title" id="noteTitle" onChange={titleHandler} name="noteTitle"></input> 
            <textarea cols="10" rows="10" onChange={textHandler} placeholder="Note Text"></textarea>

            <div className="noteControls">

                <select className="colorSel" id="color" onChange={colourHandler} name="color">
                    <option value="" disabled selected>Colour</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>

                <button className="add"> Add Note </button>
            </div>
            </div>
    );
};

export default AddNote;