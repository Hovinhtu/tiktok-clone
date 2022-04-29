import React from "react";
import styles from "../css/Content.module.css";

import TextInformation from "./TextInfomation"
import VideoCard from "./VideoCard";


export default function Content({core}) {
  return (
    <div className={styles.divContentContainer}>
      <TextInformation core={core}/>
      <VideoCard core={core}/>
    </div>
  );
}
