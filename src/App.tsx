import React from 'react';
import Router from "./routes";
import Navbar from "./layout/navbar";
import styles from "./App.module.scss"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <div className={styles.content}>
        <Router/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
