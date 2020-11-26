import * as React from "react";
//____________________________________________
//
export type Note = {
  id: string;
  content: string;
};

type Context = {
  currentNote: Note;
  setCurrentNote: (data: Note) => void;
};

const initialState: Context = {
  currentNote: {
    id: "",
    content: "",
  },
  setCurrentNote: () => {},
};

const CurrentNoteContext = React.createContext<Context>(initialState);

const CurrentNoteProvider: React.FC = ({ children }) => {
  const [currentNote, setCurrentNote] = React.useState<Note>({
    id: "",
    content: "",
  });

  return (
    <CurrentNoteContext.Provider value={{ currentNote, setCurrentNote }}>
      {children}
    </CurrentNoteContext.Provider>
  );
};
//____________________________________________
//
export { CurrentNoteProvider };

export const useCurrentNote = () => React.useContext(CurrentNoteContext);
