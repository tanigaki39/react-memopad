import * as React from "react";
import styles from "./index.module.css";
//____________________________________________
//
type NoteListProps = {
  data: {
    id: string;
    content: string;
  }[];
  onClick: (id: string) => void;
};
//____________________________________________
//
const Component: React.FC<NoteListProps> = ({ data, onClick }) => {
  return (
    <div className={styles.root}>
      {data.map((item) => (
        <div
          className={styles.item}
          key={item.id}
          onClick={() => onClick(item.id)}
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
