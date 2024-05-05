import React from 'react';
import Router from "./routes";
import Navbar from "./layout/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
