const Note = ({id, noteTitle, noteText, deleteNoteHandler}) => {

    return (
            <div className="note">
                <div className="noteTitle"> {noteTitle} </div>
                <div className ="NoteText">
                    <span> {noteText} </span>
                </div>
                <div className="noteControls">
                    <button className="edit">Edit</button>
                    <button className="delete" onClick={()=> deleteNoteHandler(id)}>Delete</button>
                </div>
            </div>
    )
}

export default Note;