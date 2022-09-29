import { useState } from 'react';
import { nanoid } from 'nanoid';
import AllNotes from "./components/AllNotes";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    noteTitle: "Note Title 1",
    noteText: "Note Text",
  },
  {
    id: nanoid(),
    noteTitle: "Note Title 2",
    noteText: "Note Text",
  },
  {
    id: nanoid(),
    noteTitle: "Note Title 3",
    noteText: "Note Text",
  }
]);

  const saveNote =  (title, text) => {
      const newNote = {
        id: nanoid(),
        noteTitle: title,
        noteText: text
      }
      const notesArr = [...notes, newNote];
      setNotes(notesArr);
  }

  return (
    <div className="container">
        <AllNotes notes={notes} saveNoteHandler={saveNote} />
    </div>
  );
};

export default App;
