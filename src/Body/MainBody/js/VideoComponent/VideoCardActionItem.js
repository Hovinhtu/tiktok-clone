import React from "react";
import styles from "../../css/VideoCardActionItem.module.css";

import IconHeart from "../../svgComponent/IconHeart";
import IconEllipsisRightFill from "../../svgComponent/IconEllipsisRightFill";
import IconShare from "../../svgComponent/IconShare";


export default function VideoCardActionItem() {
  return (
    <div className={styles.divActionItemContainer}>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconHeart />
        </span>
        <strong className={styles.strongText}>181.1K</strong>
      </button>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconEllipsisRightFill />
        </span>
        <strong className={styles.strongText}>7536</strong>
      </button>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconShare />
        </span>
        <strong className={styles.strongText}>1234</strong>
      </button>
    </div>
  );
}
