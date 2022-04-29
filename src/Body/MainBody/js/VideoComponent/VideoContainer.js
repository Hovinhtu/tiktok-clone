import React from "react";
import styles from "../../css/VideoCard.module.css"
export default function VideoContainer({...props}) {
  return (
    <div mode="0" className={styles.divContainer}>
      <img
        mode="0"
        loading="lazy"
        className={styles.imgPoster}
      ></img>
      <div className={styles.divBasicPlayerWrapper}>
        <video
          id="1"
          ref={props.videoReference}
          src={props.core.videoSrc}
          playsInline
          autoPlay
          className={styles.videoBasic}
        ></video>
      </div>
    </div>
  );
}
