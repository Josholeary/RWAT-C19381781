import Note from "./Note";
import AddNote from "./AddNote";

const AllNotes = ({notes, saveNoteHandler, deleteNoteHandler}) => {
    return (
        <div className="all-notes">
            <AddNote saveNoteHandler={saveNoteHandler} />
            { notes.map((note)=> 
            <Note id={note.id} noteTitle={note.noteTitle} noteText={note.noteText} noteColour={note.noteColour} saveNoteHandler={saveNoteHandler} deleteNoteHandler={deleteNoteHandler} />
            )}
        </div>
    );
};

export default AllNotes;