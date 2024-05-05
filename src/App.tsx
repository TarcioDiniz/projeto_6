import React from 'react';
import Router from "./routes";
import Navbar from "./layout/navbar";
import styles from "./App.module.scss"

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <div className={styles.content}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
