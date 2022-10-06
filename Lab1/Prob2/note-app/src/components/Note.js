import { useState } from "react";

const Note = ({id, noteTitle, noteText, noteColour, copyNoteHandler, saveNoteHandler, deleteNoteHandler}) => {


    const [editText, setEditText] = useState('');

    const editHandler = (event) => {
        setEditText(event.target.value);
    }

    const copyHandler = (id) => {
        if(editText.trim().length > 0)
        {
            copyNoteHandler(id, noteTitle,editText,noteColour);
            setEditText('');
        }
    }

    return (
            <div>
                <div className= { noteColour==="red" ? 'note red-Note' : 'none' }>
                    <div className="noteTitle"> {noteTitle} </div>
                    <div className ="noteText">
                        <textarea cols="10" rows="10" value={editText} onChange={editHandler} placeholder={noteText}></textarea>
                    </div>
                    <div className="noteControls">
                        <button className="copy" onClick={()=> copyHandler(id)} >Copy</button> 
                        <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                    </div>
                </div> 

                <div className= { noteColour==="green" ? 'note green-Note' : 'none'  }>
                    <div className="noteTitle"> {noteTitle} </div>
                        <div className ="noteText">
                            <textarea cols="10" rows="10" value={editText} onChange={editHandler} placeholder={noteText}></textarea>
                        </div>
                        <div className="noteControls">
                            <button className="copy" onClick={()=> copyHandler(id)} >Copy</button> 
                            <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                        </div>
                </div>

                <div className= { noteColour==="blue" ? 'note blue-Note' : 'none'  }>
                    <div className="noteTitle"> {noteTitle} </div>
                        <div className ="noteText">
                            <textarea cols="10" rows="10" value={editText} onChange={editHandler} placeholder={noteText}></textarea>
                        </div>
                        <div className="noteControls">
                            <button className="copy" onClick={()=> copyHandler(id)} >Copy</button> 
                            <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                        </div>
                </div>
            </div>

    )
}

export default Note;