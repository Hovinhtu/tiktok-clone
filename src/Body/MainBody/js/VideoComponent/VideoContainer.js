import React from "react";
import styles from "../../css/VideoCard.module.css"
export default function VideoContainer({...props}) {
  return (
    <div mode="0" className={styles.divContainer}>
      <img
        mode="0"
        src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/096790bb44964568a22b0b9d77e292d2?x-expires=1650963600&x-signature=hquSyLDYtx280FDU5JaYpN3tOks%3D"
        alt="video mèo cho bạn nào cần nhé 🥰#xuhuongtiktok #xuhuongdi"
        loading="lazy"
        className={styles.imgPoster}
      ></img>
      <div className={styles.divBasicPlayerWrapper}>
        <video
          id="1"
          ref={props.videoReference}
          src="https://v16-webapp.tiktok.com/e4e76062dba3b748ecafa66e2dfa2c55/6267b5da/video/tos/useast2a/tos-useast2a-pve-0037-aiso/cd6bd2e7bef4428e8cd06aadd1f1874c/?a=1988&br=4980&bt=2490&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Z.sI4we2NKvhml7Gb&l=2022042603043001024501512604218CE2&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZ0d2Y6Zm07OzMzZjgzM0ApOTVlZDk7ODw6N2Q4ZGdnOWcvNnNtcjRnYmZgLS1kL2NzczRhMF4yNDIzMTEyYjZiYjE6Yw%3D%3D&vl=&vr="
          playsInline
          autoPlay
          className={styles.videoBasic}
        ></video>
      </div>
    </div>
  );
}
