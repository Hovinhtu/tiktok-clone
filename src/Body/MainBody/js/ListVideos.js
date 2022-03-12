import React from "react";
import styles from "../css/ListVideos.module.css"

export default function ListVideos() {
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
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3ad8b31e32feed4b90535aa73e2dce13~c5_100x100.jpeg?x-expires=1647036000&amp;x-signature=2gaHUUeWcDtTYVNbXJA%2BNLwgj7c%3D"
              className={styles.imgAvatar}
            />
          </span>
        </div>
      </a>
    </div>
  );
}
