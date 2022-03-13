import React from "react";
import styles from "../css/FooterContainer.module.css";
import { footerApi } from "../API/FooterApi";
import { useState } from "react";
import FooterComponent from "./FooterComponent";
export default function FooterContainer() {
  const array = Object.values(Object.values(footerApi)[1]);

  const [moreState, setMoreState] = useState(false);

  return (
    <div className={styles.divFooterContainer}>
      {array.map((listItems, index) => {
        return (
          <div className={styles.divLinkContainer} key={index}>
            {Object.values(listItems)[0].map((item, index) => {
              return (
                <a
                  href={item.linkItem.link}
                  key={index}
                  className={styles.styleNavLink}
                >
                  {item.linkItem.title}
                </a>
              );
            })}
          </div>
        );
      })}
      <div
        className={styles.divMoreContainer}
        onMouseEnter={() => setMoreState(true)}
        onMouseLeave={() => setMoreState(false)}
      >
        <span className={styles.spanMoreText}>
          Thêm {moreState && <FooterComponent />}
        </span>
      </div>
      <span className={styles.spanCopyRight}>© 2022 TikTok</span>
    </div>
  );
}
