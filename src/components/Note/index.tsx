import * as React from "react";
import styles from "./index.module.css";
//____________________________________________
//
const Component: React.FC = () => {
  const [text, setText] = React.useState(localStorage.getItem("note"));

  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    localStorage.setItem("note", e.target.value);
  };

  return (
    <textarea
      onChange={handleChangeNote}
      defaultValue={text as string}
      className={styles.root}
    ></textarea>
  );
};
//____________________________________________
//
export default Component;
