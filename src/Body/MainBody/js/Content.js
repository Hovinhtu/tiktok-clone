import React from "react";
import styles from "../css/Content.module.css";

import TextInformation from "./TextInfomation"
import VideoCard from "./VideoComponent/VideoCard";
export default function Content() {
  return (
    <div className={styles.divContentContainer}>
      <TextInformation />
      <VideoCard />
    </div>
  );
}
