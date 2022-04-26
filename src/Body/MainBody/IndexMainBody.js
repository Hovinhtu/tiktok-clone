import React from "react";
import styles from "./css/IndexMainBody.module.css";

import ListVideos from "./js/ListVideos";
import Content from "./js/Content";

export default function IndexMainBody() {
  return (
    <div className={styles.divMainContainer}>
      <div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
        <div className={styles.divItemContainer}>
          <ListVideos />
          <Content />
        </div>
      </div>
    </div>
  );
}
