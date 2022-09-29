import Note from "./Note";
import AddNote from "./AddNote";

const AllNotes = ({notes}) => {
    return (
        <div className="all-notes">
            <AddNote />
            { notes.map((note)=> 
            <Note id={note.id} noteTitle={note.noteTitle} noteText={note.noteText} />
            )}
        </div>
    );
};

export default AllNotes;