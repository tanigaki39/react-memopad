import * as React from "react";
import { useCurrentNote } from "../../context/CurrentNoteContext";
import styles from "./index.module.css";
//____________________________________________
//
const Component: React.FC = () => {
  const { currentNote, setCurrentNote } = useCurrentNote();
  const [editValue, setEditValue] = React.useState("");

  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
    setCurrentNote({ ...currentNote, content: e.target.value });
  };

  React.useEffect(() => {
    setEditValue(currentNote.content);
  }, [currentNote]);

  return (
    <textarea
      onChange={handleChangeNote}
      value={editValue}
      className={styles.root}
    ></textarea>
  );
};
//____________________________________________
//
export default Component;
