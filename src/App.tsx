import React from "react";
import Note from "./components/Note";
import Preview from "./components/Preview";
//____________________________________________
//
function App() {
  const [markDown, setMarkDown] = React.useState(
    (localStorage.getItem("note") as string) || ""
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Note content={markDown} changeContent={setMarkDown} />
      <Preview content={markDown} />
    </div>
  );
}
//____________________________________________
//
export default App;
