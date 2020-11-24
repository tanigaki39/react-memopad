import * as React from "react";
import Editor from "../Editor";
import Preview from "../Preview";
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
    <div>
      <div style={{ flex: 1 }}>
        <Editor content={data.content} changeContent={changeContent} />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Preview content={data.content} />
      </div>
    </div>
  );
};
//____________________________________________
//
export default Component;
