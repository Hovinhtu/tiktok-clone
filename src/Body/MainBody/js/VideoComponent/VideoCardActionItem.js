import React from "react";
import styles from "../../css/VideoCardActionItem.module.css";

import IconHeart from "../../svgComponent/IconHeart";
import IconEllipsisRightFill from "../../svgComponent/IconEllipsisRightFill";
import IconShare from "../../svgComponent/IconShare";


export default function VideoCardActionItem({core}) {
  return (
    <div className={styles.divActionItemContainer}>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconHeart />
        </span>
        <strong className={styles.strongText}>{core.like}</strong>
      </button>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconEllipsisRightFill />
        </span>
        <strong className={styles.strongText}>{core.comment}</strong>
      </button>
      <button className={styles.buttonActionItem}>
        <span className={styles.spanIconWrapper}>
          <IconShare />
        </span>
        <strong className={styles.strongText}>{core.share}</strong>
      </button>
    </div>
  );
}
