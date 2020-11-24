import React from "react";
import { v4 as uuid } from "uuid";
import Note from "./components/Note";
//____________________________________________
//
type NoteData = {
  id: string;
  content: string;
};
//____________________________________________
//
function App() {
  const [currentNote, setCurrentNote] = React.useState<NoteData>();
  const [notes, setNotes] = React.useState<NoteData[]>(
    JSON.parse(localStorage.getItem("notes") as string) ||
      localStorage.setItem("notes", JSON.stringify([]))
  );

  const handleClickNewNote = () => {
    const newNote = {
      id: uuid(),
      content: "",
    };
    setNotes((prev) => [...prev, newNote]);
    setCurrentNote(newNote);
  };

  const handleChangeContent = (content: string) => {
    currentNote &&
      setNotes(
        notes.map((note) =>
          note.id === currentNote.id ? { id: currentNote.id, content } : note
        )
      );
  };

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <button onClick={handleClickNewNote}>New Note</button>
      {currentNote && (
        <Note data={currentNote} changeContent={handleChangeContent} />
      )}
    </div>
  );
}
//____________________________________________
//
export default App;
