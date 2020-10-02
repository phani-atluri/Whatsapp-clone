import React from "react";
import "./App.css";
import MainCard from "./components/MainCard";

function App() {
  return (
    <div className="App">
      <div className="gray">
        <div className="green">
          <div className="app__mainCard">
            <MainCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
