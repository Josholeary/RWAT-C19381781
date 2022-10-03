const Note = ({id, noteTitle, noteText, noteColour, deleteNoteHandler}) => {
    return (
            <div>
                <div className= { noteColour==="red" ? 'note red-Note' : 'none' }>
                    <div className="noteTitle"> {noteTitle} </div>
                    <div className ="NoteText">
                        <span> {noteText} </span>
                    </div>
                    <div className="noteControls">
                        <button className="edit">Edit</button>
                        <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                    </div>
                </div> 
                <div className= { noteColour==="green" ? 'note green-Note' : 'none'  }>
                    <div className="noteTitle"> {noteTitle} </div>
                        <div className ="NoteText">
                            <span> {noteText} </span>
                        </div>
                        <div className="noteControls">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                        </div>
                </div>
                <div className= { noteColour==="blue" ? 'note blue-Note' : 'none'  }>
                    <div className="noteTitle"> {noteTitle} </div>
                        <div className ="NoteText">
                            <span> {noteText} </span>
                        </div>
                        <div className="noteControls">
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                        </div>
                </div>
            </div>

    )
}

export default Note;