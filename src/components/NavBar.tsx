import WindowControls from "./WindowControls";
import "../styles/NavBar.css"

function NavBar(){
  return (
    <div id="navbar">
      <div data-tauri-drag-region></div>
      <WindowControls />
    </div>
  );
}

export default NavBar;

