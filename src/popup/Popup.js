import logo from "./logo.svg";
import "./Popup.css";

export const getCurrentTabUId = (callback) => {
  const queryInfo = { active: true, currentWindow: true };

  chrome.tabs &&
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0].id);
    });
};

function Popup() {
  const sendMessage = () => {
    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, {
          value: "openPopup",
        });
      window.close();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendMessage}>Open popup</button>
      </header>
    </div>
  );
}

export default Popup;
