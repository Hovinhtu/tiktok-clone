import React from "react";
import IndexHeader from "./Header/IndexHeader";
import IndexSideBar from "./Body/SideBar/IndexSideBar";
import IndexMainBody from "./Body/MainBody/IndexMainBody";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.divPage}>
      <IndexHeader />
      <div className={styles.divBodyContainer}>
        <IndexSideBar />
        <IndexMainBody />
      </div>
    </div>
  );
}
