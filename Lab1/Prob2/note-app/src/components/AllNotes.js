import Note from "./Note";
import AddNote from "./AddNote";

const AllNotes = ({notes, saveNoteHandler, copyNoteHandler, deleteNoteHandler}) => {
    return (
        <div className="all-notes">
            <AddNote saveNoteHandler={saveNoteHandler} />
            { notes.map((note)=> 
            <Note id={note.id} noteTitle={note.noteTitle} noteText={note.noteText} noteColour={note.noteColour} saveNoteHandler={saveNoteHandler} copyNoteHandler={copyNoteHandler} deleteNoteHandler={deleteNoteHandler} />
            )}
        </div>
    );
};

export default AllNotes;