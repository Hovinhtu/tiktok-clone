import React from "react";
import styles from "../css/ListVideos.module.css"

export default function ListVideos({core}) {
  console.log(core)
  return (
    <div style={{ boxSizing: "border-box" }}>
      <a className={styles.avatarAnchor} href="/">
        <div
          className={styles.divContainer}
          style={{ width: "56px", height: "56px" }}
        >
          <span
            shape="circle"
            style={{ width: "56px", height: "56px" }}
            className={styles.spanAvatarContainer}
          >
            <img
              loading="lazy"
              alt="avatar-img"
              src={core.avatar}
              className={styles.imgAvatar}
            />
          </span>
        </div>
      </a>
    </div>
  );
}
