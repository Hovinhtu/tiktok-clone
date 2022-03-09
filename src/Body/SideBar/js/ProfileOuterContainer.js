import React from "react";
import styles from "../css/ProfileOuterContainer.module.css";
export default function ProfileOuterContainer(props) {
  return (
    <div
      className={styles.divProfileOuterContainer}
      style={{ top: "10px", left: "0px" }}
    >
      <div className={styles.divPaddingTop}></div>
      <div className={styles.divProfileContainer}>
        <div className={styles.divHeadContainer}>
          <a className={styles.styledAvatarLink} href={props.link}>
            <span
              shape="circle"
              className={styles.spanAvatarContainer}
              style={{ width: "44px", height: "44px" }}
            >
              <img
                loading="lazy"
                src={props.cover}
                className={styles.imgAvatar}
              />
            </span>
          </a>
          <button type="button" className={styles.avatarButton}>
            Follow
          </button>
        </div>
        <a className={styles.styledUserTitle} href={props.link}>
          <span>{props.subTitle}</span>
          <svg
            className={styles.styledVerifyBadge}
            width="14"
            height="14"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
            <path
              d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
              fill="white"
            ></path>
          </svg>
        </a>
        <br />
        <a className={styles.styledUserName} href={props.link}>
          {props.title}
        </a>
        <p className={styles.pUserStat}>
          <span className={styles.spanUserStatsText}>{Math.round(props.follower*1)/1000000+"M"}</span>
          <span className={styles.spanUserStatsDesc}>Follower</span>
          <span className={styles.spanUserStatsText}>{Math.round(parseInt(props.like)*10)/10000000+"M"}</span>
          <span className={styles.spanUserStatsDesc}>Thích</span>
        </p>
      </div>
    </div>
  );
}
