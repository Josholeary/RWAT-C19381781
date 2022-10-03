import { useState } from "react";

const AddNote = ({saveNoteHandler}) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [noteColour, setNoteColour] = useState('')

    const titleHandler = (event) => {
        setNoteTitle(event.target.value);
    };

    const textHandler = (event) => {
        setNoteText(event.target.value);
    };

    const colourHandler = (event) => {
        setNoteColour(event.target.value);
    };

    const saveHandler = () => {
        if(noteText.trim().length > 0 && noteTitle.trim().length > 0)
        {
            saveNoteHandler(noteTitle,noteText,noteColour);
            setNoteTitle('');
            setNoteText('');
            setNoteColour('');
        }
    }

    return(
        <div className="note add-note">
            <input type="text" placeholder="Note Title" id="noteTitle" value={noteTitle} onChange={titleHandler} name="noteTitle"></input> 
            <textarea cols="10" rows="10" value={noteText} onChange={textHandler} placeholder="Note Text"></textarea>

            <div className="noteControls">

                <select className="colorSel" id="color" onChange={colourHandler} name="color">
                    <option value="" selected disabled>Colour</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>

                <button className="add" onClick={saveHandler}> Add Note </button>
            </div>
            </div>
    );
};

export default AddNote;