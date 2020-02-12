import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    console.log("first render", seconds);
    if (isRunning) {
      const id = window.setInterval(() => {
        console.log("tick", seconds);
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => window.clearInterval(id);
    }
  }, [isRunning, intervalId]);

  const Reset = () => {
    setSeconds(0);
  };

  const Pause = () => {
    setIsRunning(false);
  };

  const Play = () => {
    setIsRunning(true);
  };

  return (
    <div className="app">
      <div className="time-circle">
        <div className="time">{seconds}</div>
      </div>
      <div className="buttons">
        {!isRunning ? (
          <button className="play-pause" onClick={() => Play()}>
            <i className="fa fa-play fa-2x" />
          </button>
        ) : (
          <button className="play-pause" onClick={() => Pause()}>
            <i className="fa fa-pause fa-2x" />
          </button>
        )}
        <button className="reset" onClick={() => Reset()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
