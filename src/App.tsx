import { useState } from "react";
import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import "./styles/App.css"
import { createRoot } from "react-dom/client";

function App() {
  const [preview, setPreview] = useState(false);
  return (
    <main className="app-container">
      <NavBar />
      <ToolBar preview={preview} setPreview={setPreview} />
      <Editor preview={preview} />
    </main>
  );
}

export default App;
