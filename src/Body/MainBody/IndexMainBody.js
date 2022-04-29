import React from "react";
import styles from "./css/IndexMainBody.module.css";

import ListVideos from "./js/ListVideos";
import Content from "./js/Content";

import { customVideoApiList } from "./API/VideoListAPI";

export default function IndexMainBody() {
  console.log(customVideoApiList);
  return (
    <div className={styles.divMainContainer}>
      {customVideoApiList.map((customVideo, index) => {
        return (
          <div key={index} className={styles.divItemContainer}>
            <ListVideos core={customVideo}/>
            <Content core={customVideo}/>
          </div>
        );
      })}
    </div>
  );
}
