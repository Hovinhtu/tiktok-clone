import React, { useEffect, useRef, useState } from "react";
import styles from "../css/VideoCard.module.css";

import VideoContainer from "./VideoComponent/VideoContainer";
import VideoPlayPause from "./VideoComponent/VideoPlayPause";
import VideoCardActionItem from "./VideoComponent/VideoCardActionItem";
import VideoVolume from "./VideoComponent/VideoVolume";
import VideoReport from "./VideoComponent/VideoReport";

export default function VideoCard({core}) {
  const VOLUME_VALUE = 60;

  const [videoPlayPause, setVideoPlayPause] = useState(true);
  const [positionMouse, setPositionMouse] = useState(VOLUME_VALUE);
  const [iconSoundStatus, setIconSoundStatus] = useState(false);

  const videoRef = useRef();

  const playPause = () => {
    setVideoPlayPause((prev) => !prev);
    if (videoPlayPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    positionMouse === "0"
      ? setIconSoundStatus(true)
      : setIconSoundStatus(false);
    videoRef.current.volume = Math.round(positionMouse * 1) / 100;
  }, [positionMouse]);

  const handleOnChangeInput = (e) => {
    setPositionMouse(e.target.value);
  };

  return (
    <div className={styles.divVideoWrapper}>
      <div className={styles.divVideoCardContainer}>
        <canvas
          width="56.25"
          height="100"
          className={styles.canvasVideoCardPlaceholder}
        ></canvas>
        <div className={styles.divVideoPlayerContainer}>
          <VideoContainer videoReference={videoRef} core={core}/>
          <VideoPlayPause
            playPauseControl={playPause}
            playPauseFlag={videoPlayPause}
          />
          <VideoVolume
            defaultVolumeValue={VOLUME_VALUE}
            volumeValue={positionMouse}
            handleChange={handleOnChangeInput}
            iconSoundFlag={iconSoundStatus}
          />
          <VideoReport />
          <div className={styles.divVideoControlBottom}></div>
        </div>
      </div>
      <VideoCardActionItem core={core} />
    </div>
  );
}
