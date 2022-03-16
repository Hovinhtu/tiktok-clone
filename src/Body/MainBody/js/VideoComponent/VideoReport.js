import React from "react";
import styles from "../../css/VideoCard.module.css";

import IconReport from "../../svgComponent/IconReport";

export default function VideoReport() {
  return (
    <p className={styles.pReportText}>
      <IconReport />
      Báo cáo
    </p>
  );
}
