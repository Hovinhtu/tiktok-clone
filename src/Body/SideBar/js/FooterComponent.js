import React from "react";
import styles from "../css/FooterContainer.module.css"

export default function FooterComponent() {
  return (
    <div
      className={styles.divContainer}
      style={{ backgroundColor: "rgb(255, 255, 255)", left: "-2px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 8"
        width="1em"
        height="1em"
        verticalPropKey="bottom"
        className={styles.styledTopArrow}
        style={{ left: "6px" }}
      >
        <path d="M0 8c7 0 10-8 12-8s5 8 12 8z"></path>
      </svg>
      <div className={styles.divMorePopupWrapper}>
        <a
          href="https://www.tiktok.com/legal/law-enforcement?lang=vi-VN"
          className={styles.styledMoreLink}
        >
          NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
        </a>
      </div>
    </div>
  );
}
