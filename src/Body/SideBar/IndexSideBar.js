import React from "react";
import MainNavBar from "./js/MainNavBar";
import FrameContainer from "./js/FrameContainer";
import UserContainer from "./js/UserContainer";
import DiscoverContainer from "./js/DiscoverContainer";
import styles from "./css/IndexSideBar.module.css";

export default function IndexSideBar() {
  return (
    <div className={styles.divSideBar}>
      <div className={styles.divScrollContainer}>
        <div className={styles.divWrapper}>
          <MainNavBar />
          <FrameContainer />
          <UserContainer />
          <DiscoverContainer />
        </div>
        <div
          className={styles.divScrollBar}
          style={{
            height: "342.232px",
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(1.93319) translateZ(-0.933192px) translateZ(-2px)",
          }}
        >
          <div className={styles.divScrollBarThumb}></div>
        </div>
      </div>
    </div>
  );
}
