import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
//____________________________________________
//
function App() {
  const [markDown, setMarkDown] = React.useState(
    (localStorage.getItem("note") as string) || ""
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1 }}>
        <Editor content={markDown} changeContent={setMarkDown} />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Preview content={markDown} />
      </div>
    </div>
  );
}
//____________________________________________
//
export default App;
