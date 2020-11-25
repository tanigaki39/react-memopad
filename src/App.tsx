import React from "react";
import { v4 as uuid } from "uuid";
import Note from "./components/Note";
import NoteList from "./components/NoteList";
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
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ width: 240 }}>
        <div
          style={{
            background: "hsl(210, 15%, 20%)",
            padding: "1em",
            borderBottom: "1px solid #666",
          }}
        >
          <button onClick={handleClickNewNote}>New Note</button>
        </div>
        <NoteList
          onClick={(id) => setCurrentNote(notes.find((item) => item.id === id))}
          data={notes}
        />
      </div>
      <div style={{ flex: 1 }}>
        {currentNote && (
          <Note data={currentNote} changeContent={handleChangeContent} />
        )}
      </div>
    </div>
  );
}
//____________________________________________
//
export default App;
