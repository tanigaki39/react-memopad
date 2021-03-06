import * as React from "react";
import styles from "./index.module.css";
import marked from "marked";
import Prism from "prismjs";
import "./prism.css";
import { useCurrentNote } from "../../context/CurrentNoteContext";
//____________________________________________
//
const Component: React.FC = () => {
  const {
    currentNote: { content },
  } = useCurrentNote();
  const [html, setHtml] = React.useState(marked(content));

  React.useEffect(() => {
    setHtml(marked(content));
  }, [content]);

  React.useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className={styles.root}>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};
//____________________________________________
//
export default Component;
