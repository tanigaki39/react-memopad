import * as React from "react";
import styles from "./index.module.css";
//____________________________________________
//
const Component: React.FC<{
  content: string;
  changeContent: (content: string) => void;
}> = ({ content, changeContent }) => {
  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    changeContent(e.target.value);
  };

  React.useEffect(() => {
    localStorage.setItem("note", content);
  }, [content]);

  return (
    <textarea
      onChange={handleChangeNote}
      defaultValue={content}
      className={styles.root}
    ></textarea>
  );
};
//____________________________________________
//
export default Component;
