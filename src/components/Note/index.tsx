import * as React from "react";
import Editor from "../Editor";
import Preview from "../Preview";
//____________________________________________
//
type NoteProps = {
  data: {
    id: number;
    content: string;
  };
  setMarkDown: () => void;
};
//____________________________________________
//
const Component: React.FC<NoteProps> = ({ data, setMarkDown }) => {
  return (
    <div>
      <div style={{ flex: 1 }}>
        <Editor content={data.content} changeContent={setMarkDown} />
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
