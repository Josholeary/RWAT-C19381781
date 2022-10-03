import { useState } from 'react';
import { nanoid } from 'nanoid';
import AllNotes from "./components/AllNotes";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    noteTitle: "Note Title 1",
    noteText: "Note Text",
    noteColour: "red"
  },
  {
    id: nanoid(),
    noteTitle: "Note Title 2",
    noteText: "Note Text",
    noteColour: "green"
  },
  {
    id: nanoid(),
    noteTitle: "Note Title 3",
    noteText: "Note Text",
    noteColour: "blue"
  }
]);

  const saveNote =  (title, text, colour) => {
      const newNote = {
        id: nanoid(),
        noteTitle: title,
        noteText: text,
        noteColour: colour
      }
      const notesArr = [...notes, newNote];
      setNotes(notesArr);
  }

  const deleteNote = (id) =>
  {
      const notesArr = notes.filter((note)=> note.id !== id);
      setNotes(notesArr);
  }

  return (
    <div className="container">
        <h1> Note Taking App </h1>
        <AllNotes notes={notes} saveNoteHandler={saveNote} deleteNoteHandler={deleteNote} />
    </div>
  );
};

export default App;
