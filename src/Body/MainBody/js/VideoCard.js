import React, { useEffect, useRef, useState } from "react";
import styles from "../css/VideoCard.module.css";
import VideoCardActionItem from "./VideoCardActionItem";

import IconPlay from "../svgComponent/IconPlay";
import IconPause from "../svgComponent/IconPause";
import IconMute from "../svgComponent/IconMute";
import IconReport from "../svgComponent/IconReport";
let positionCircleVolume = -36;
export default function VideoCard() {
  const [videoPlayPause, setVideoPlayPause] = useState(true);
  const [mouseDownUp, setMouseDownUp] = useState(false);
  const [positionMouse, setPositionMouse] = useState();

  const videoRef = useRef();
  const prevPositionMouse = useRef();

  useEffect(() => {
    prevPositionMouse.current = positionMouse;
  }, [positionMouse]);

  const handleMouseMove = (e) => {
    mouseDownUp && setPositionMouse(e.clientY);
    // mouseDownUp && console.log(e.clientY);
  };

  const handleMouseDown = () => {
    setMouseDownUp(true);
  };

  const handleMouseUp = () => {
    setMouseDownUp(false);
  };
  useEffect(() => {
    {
      console.log(videoRef.current);
      console.log(document.getElementById("1"));
    }
  }, [videoRef.current]);
  // useEffect(()=>{

  // },[videoRef.current.volume])
  const playPause = () => {
    setVideoPlayPause((prev) => !prev);
    if (videoPlayPause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  if (prevPositionMouse.current !== undefined) {
    if (prevPositionMouse.current > positionMouse) {
      if (positionCircleVolume > -36) {
        positionCircleVolume--;
        videoRef.current.volume = Math.abs(positionCircleVolume/36)
      }
    } else {
      if (positionCircleVolume < 0) {
        positionCircleVolume++;
        videoRef.current.volume = Math.abs(positionCircleVolume/36)
      }
    }
  }
  console.log(positionCircleVolume);

  return (
    <div className={styles.divVideoWrapper}>
      <div
        className={styles.divVideoCardContainer}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <canvas
          width="56.25"
          height="100"
          className={styles.canvasVideoCardPlaceholder}
        ></canvas>
        <div className={styles.divVideoPlayerContainer}>
          <div mode="0" className={styles.divContainer}>
            <img
              mode="0"
              src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d3fbb405ca5b4edaa487622eff96d101?x-expires=1647025200&amp;x-signature=yyRDy2pKQhYFWCxtwbXH38%2BXpo8%3D"
              alt="video mèo cho bạn nào cần nhé 🥰#xuhuongtiktok #xuhuongdi"
              loading="lazy"
              className={styles.imgPoster}
            ></img>
            <div className={styles.divBasicPlayerWrapper}>
              <video
                id="1"
                ref={videoRef}
                src="https://v16-webapp.tiktok.com/e024674a250e1f5dca6505a7c0b46aec/622c5b41/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/a20c466f319647cfbf0ac82619f85cc0/?a=1988&br=2292&bt=1146&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThN1mvDXq&l=2022031202345001024407507123351BA2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MztxaTw6ZnRkOjMzZjgzM0ApO2QzNTc5NGVpN2lpaWgzZ2dsLjBvcjQwb3JgLS1kL2NzczMzL2A1NWJjMTEuY2AwNWM6Yw%3D%3D&vl=&vr="
                playsInline=""
                autoPlay=""
                className={styles.videoBasic}
              ></video>
            </div>
          </div>
          <div className={styles.divPlayIconContainer} onClick={playPause}>
            {videoPlayPause ? <IconPlay /> : <IconPause />}
          </div>
          <div className={styles.divVoiceContainer}>
            <div className={styles.divVolumeControlContainer}>
              <div className={styles.divVolumeControlProgress}></div>
              <div
                className={styles.divVolumeControlCircle}
                style={{ transform: `translateY(${positionCircleVolume}px)` }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              ></div>
              <div
                className={styles.divVolumeControlBar}
                style={{
                  transform: `scaleY(${Math.abs(positionCircleVolume / 36)})`,
                }}
              ></div>
            </div>

            <div className={styles.divMuteIconContainer}>
              <IconMute />
            </div>
          </div>
          <div className={styles.divVideoControlBottom}></div>
          <p className={styles.pReportText}>
            <IconReport />
            Báo cáo
          </p>
        </div>
      </div>
      <VideoCardActionItem />
    </div>
  );
}
