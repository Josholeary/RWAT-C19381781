const Note = ({id, noteTitle, noteText}) => {
    return (
        <div className="note">
            <div className="noteTitle"> {noteTitle} </div>
            <div className ="NoteText">
                <span> {noteText} </span>
            </div>
            <div className="noteControls">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    )
}

export default Note;