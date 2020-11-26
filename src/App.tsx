import React from "react";
import { CurrentNoteProvider } from "./context/CurrentNoteContext";
import Memopad from "./components/Memopad";
//____________________________________________
//
function App() {
  return (
    <CurrentNoteProvider>
      <Memopad />
    </CurrentNoteProvider>
  );
}
//____________________________________________
//
export default App;
