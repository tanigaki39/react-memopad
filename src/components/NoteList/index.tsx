import * as React from "react";
import { useCurrentNote } from "../../context/CurrentNoteContext";
import styles from "./index.module.css";
import { Note } from "../../context/CurrentNoteContext";
//____________________________________________
//
type NoteListProps = {
  data: {
    id: string;
    content: string;
  }[];
};
//____________________________________________
//
const Component: React.FC<NoteListProps> = ({ data }) => {
  const { currentNote, setCurrentNote } = useCurrentNote();

  const handleClickNote = (id: string) => {
    setCurrentNote(data.find((item) => item.id === id) as Note);
  };

  return (
    <div className={styles.root}>
      {data.map((item) => (
        <div
          className={
            currentNote.id === item.id ? styles.currentItem : styles.item
          }
          key={item.id}
          onClick={() => handleClickNote(item.id)}
        >
          {item.content.substr(0, 30)}
        </div>
      ))}
    </div>
  );
};
//____________________________________________
//
export default Component;
