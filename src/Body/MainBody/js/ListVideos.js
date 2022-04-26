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
              src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0ebe2ff1cdaec00a769bbb4e4efedda8.jpeg?x-expires=1651118400&x-signature=Ml3lk4lxAWMIhmA0gRR8prpLXTM%3D"
              className={styles.imgAvatar}
            />
          </span>
        </div>
      </a>
    </div>
  );
}
