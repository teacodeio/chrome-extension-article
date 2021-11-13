import logo from "./logo.svg";
import "./App.css";

function Popup() {
  const sendMessage = () => {
    chrome.runtime.sendMessage({
      value: "openPopup",
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
      </header>
      <button onClick={sendMessage}>Open popup</button>
    </div>
  );
}

export default Popup;
