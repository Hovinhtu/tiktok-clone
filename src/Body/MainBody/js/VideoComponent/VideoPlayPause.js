import React from "react";
import styles from "../../css/VideoCard.module.css";

import IconPlay from "../../svgComponent/IconPlay";
import IconPause from "../../svgComponent/IconPause";

export default function VideoPlayPause({ ...props }) {
  return (
    <div className={styles.divPlayIconContainer} onClick={props.playPauseControl}>
      {props.playPauseFlag ? <IconPlay /> : <IconPause />}
    </div>
  );
}
