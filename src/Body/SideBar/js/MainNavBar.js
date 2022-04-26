import React from "react";
import { useState } from "react";
import styles from "../css/MainNavBar.module.css";
import IconFollowComponent from "../svgComponent/IconFollowComponent";
import IconHomeComponent from "../svgComponent/IconHomeComponent";
import IconLiveComponent from "../svgComponent/IconLiveComponent";

const array = [
  {
    title: "Dành cho bạn",
    icon: IconHomeComponent,
  },
  {
    title: "Đang Follow",
    icon: IconFollowComponent,
  },
  {
    title: "LIVE",
    icon: IconLiveComponent,
  },
];
export default function MainNavBar() {
  const [state, setState] = useState(0);
  const handleClick = (id) => {
    setState(id);
  };
  return (
    <div className={styles.divMainNavBar}>
      {array.map((value, index) => {
        return (
          <div key={index}>
            <a href="" className={styles.tmpLink} onClick={() => handleClick(index)}>
              <value.icon flag={state === index} />
              <h2
                className={styles.h2MainNavText}
                style={
                  state === index
                    ? { color: "rgba(254, 44, 85, 1.0)" }
                    : { color: "rgba(22, 24, 35, 1.0)" }
                }
              >
                {value.title}
              </h2>
            </a>
          </div>
        );
      })}
    </div>
  );
}
