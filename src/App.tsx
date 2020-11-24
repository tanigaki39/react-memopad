import React from "react";
import { v4 as uuid } from "uuid";
//____________________________________________
//
type Note = {
  id: string;
  content: string;
};
//____________________________________________
//
function App() {
  const [notes, setNotes] = React.useState<Note[]>(
    JSON.parse(localStorage.getItem("notes") as string) ||
      localStorage.setItem("notes", JSON.stringify([]))
  );

  const handleClickNewNote = () => {
    setNotes((prev) => [...prev, { id: uuid(), content: "" }]);
  };

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>
      <button onClick={handleClickNewNote}>New Note</button>
    </div>
  );
}
//____________________________________________
//
export default App;
