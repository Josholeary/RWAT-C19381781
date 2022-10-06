import { useState } from 'react';
import { nanoid } from 'nanoid';
import AllNotes from "./components/AllNotes";

const App = () => {
  const [notes, setNotes] = useState([
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

  const copyNote =  (id, title, text, colour) => {

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
        <p> Enter notes below and select a colour. To edit a note simply click on the notes text and type, to make a copy of your new edited note and keep your old note template hit the copy button. (Copy was added as I realized textarea functionality could be used to edit notes and I did not want the update functionality to go to waste) </p>
        <AllNotes notes={notes} saveNoteHandler={saveNote} copyNoteHandler={copyNote} deleteNoteHandler={deleteNote} />
    </div>
  );
};

export default App;
