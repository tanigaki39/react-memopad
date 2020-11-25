import * as React from "react";
import Editor from "../Editor";
import Preview from "../Preview";
import styles from "./index.module.css";
//____________________________________________
//
type NoteProps = {
  data: {
    id: string;
    content: string;
  };
  changeContent: (content: string) => void;
};
//____________________________________________
//
const Component: React.FC<NoteProps> = ({ data, changeContent }) => {
  return (
    <div className={styles.root}>
      <div className={styles.editor}>
        <Editor content={data.content} changeContent={changeContent} />
      </div>
      <div className={styles.preview}>
        <Preview content={data.content} />
      </div>
    </div>
  );
};
//____________________________________________
//
export default Component;
