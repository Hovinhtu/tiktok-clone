import React from "react";
import styles from "../../css/VideoCard.module.css";

import IconSound from "../../svgComponent/IconSound";
import IconMute from "../../svgComponent/IconMute";

export default function VideoVolume({...props}) {
  return (
    <div className={styles.divVoiceContainer}>
      <div className={styles.divVolumeControlContainer}>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={props.defaultVolumeValue}
          className={styles.inputVolume}
          onChange={props.handleChange}
        />
        <div
          className={styles.divVolumeControlBar}
          style={{
            transform: `scaleY(${Math.round(props.volumeValue * 1) / 100})`,
          }}
        ></div>
      </div>

      <div className={styles.divMuteIconContainer}>
        {props.iconSoundFlag ? <IconMute /> : <IconSound />}
      </div>
    </div>
  );
}
