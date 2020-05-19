import React from "react";
import logo from "./logo.png";
import appstore from "./appstore.png";
import play from "./play.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>MIXROOM</h2>
        <p>
          Email your songs to music@mixroom.app, and we'll save them for you in
          our app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstore} className="Button" alt="appstore" />
          <img src={play} className="Button" alt="play" />
        </a>
      </header>
    </div>
  );
}

export default App;
