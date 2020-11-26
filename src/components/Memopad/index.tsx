import * as React from "react";
import { v4 as uuid } from "uuid";
import {
  useCurrentNote,
  Note as NoteData,
} from "../../context/CurrentNoteContext";
import Note from "../Note";
import NoteList from "../NoteList";
import styles from "./index.module.css";
//____________________________________________
//
const Component: React.FC = () => {
  const [notes, setNotes] = React.useState<NoteData[]>(
    JSON.parse(localStorage.getItem("notes") as string) || []
  );
  const { currentNote, setCurrentNote } = useCurrentNote();

  const handleClickNewNote = () => {
    const newNote = {
      id: uuid(),
      content: "",
    };
    setNotes((prev) => [...prev, newNote]);
    setCurrentNote(newNote);
  };

  const handleClickDeleteNote = () => {
    setNotes(notes.filter((note) => note.id !== currentNote.id));
    setCurrentNote({
      id: "",
      content: "",
    });
  };

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  React.useEffect(() => {
    const newNotes = notes.map((note) =>
      note.id === currentNote.id ? currentNote : note
    );
    setNotes(newNotes);
  }, [currentNote]);

  return (
    <div className={styles.root}>
      <div className={styles.aside}>
        <div className={styles.asideHeader}>
          <button onClick={handleClickNewNote}>新しいノート</button>
          <button onClick={handleClickDeleteNote}>選択中のノートを削除</button>
        </div>
        <NoteList data={notes} />
      </div>
      <div className={styles.main}>
        <Note />
      </div>
    </div>
  );
};
//____________________________________________
//
export default Component;
