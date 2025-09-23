import Editor from "./components/Editor";
import NavBar from "./components/NavBar";
import "./styles/App.css"

function App() {
  return (
    <main className="app-container">
      <NavBar />
      <Editor />
    </main>
  );
}

export default App;
