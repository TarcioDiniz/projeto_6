import React from 'react';
import Router from "./routes";
import Navbar from "./layout/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
