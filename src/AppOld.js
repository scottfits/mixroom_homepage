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
          Email your unreleased music to music@mixroom.app, and we'll save them
          for you in the Mixroom app.
        </p>
        <p>Share your tracks with friends and collaborators.</p>
        <a
          className="App-link"
          href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1511431212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstore} className="Button" alt="appstore" />
        </a>
        <a
          className="App-link"
          href="https://play.google.com/store/apps/details?id=mixroom.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={play} className="Button" alt="play" />
        </a>
      </header>
    </div>
  );
}

export default App;
