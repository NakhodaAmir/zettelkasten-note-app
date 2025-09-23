import { getCurrentWindow } from "@tauri-apps/api/window";
import "../styles/WindowControls.css"

function WindowControls(){
  const appWindow = getCurrentWindow();
  const minimize = () => appWindow.minimize();
  const maximize = () => appWindow.toggleMaximize();
  const close = () => appWindow.close()

  return(
    <div id="window-controls">
      <button onClick={minimize}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 296L544 296L544 344L96 344L96 296z"/></svg></button>
      <button onClick={maximize}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M496 144L496 496L144 496L144 144L496 144zM144 96L96 96L96 544L544 544L544 96L144 96z"/></svg></button>
      <button id="close-button" onClick={close}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M135.5 169L118.5 152L152.4 118.1L169.4 135.1L320.4 286.1L471.4 135.1L488.4 118.1L522.3 152L505.3 169L354.3 320L505.3 471L522.3 488L488.4 521.9L471.4 504.9L320.4 353.9L169.4 504.9L152.4 521.9L118.5 488L135.5 471L286.5 320L135.5 169z"/></svg></button>
    </div>
  );
}

export default WindowControls
