import Note from "./Note";
import AddNote from "./AddNote";

const AllNotes = ({notes, saveNoteHandler}) => {
    return (
        <div className="all-notes">
            <AddNote saveNoteHandler={saveNoteHandler} />
            { notes.map((note)=> 
            <Note id={note.id} noteTitle={note.noteTitle} noteText={note.noteText} />
            )}
        </div>
    );
};

export default AllNotes;