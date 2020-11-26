import * as React from "react";
import Editor from "../Editor";
import Preview from "../Preview";
import styles from "./index.module.css";
//____________________________________________
//
const Component: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.editor}>
        <Editor />
      </div>
      <div className={styles.preview}>
        <Preview />
      </div>
    </div>
  );
};
//____________________________________________
//
export default Component;
