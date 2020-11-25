import * as React from "react";
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
    <div>
      {data.map((item) => (
        <div key={item.id} onClick={() => onClick(item.id)}>
          <div>{item.content.substr(0, 30)}</div>
        </div>
      ))}
    </div>
  );
};
//____________________________________________
//
export default Component;
