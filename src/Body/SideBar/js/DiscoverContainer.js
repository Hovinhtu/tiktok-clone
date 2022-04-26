import React from "react";
import styles from "../css/DiscoverContainer.module.css";
import { listApi } from "../API/ListDiscover";

import IconDiscoverType3 from "../svgComponent/IconDiscoverType3";
import IconDiscoverType4 from "../svgComponent/IconDiscoverType4";

export default function DiscoverContainer() {
  const array = Object.values(Object.values(listApi)[1])[0];
  return (
    <div className={styles.divDiscoverContainer}>
      <p className={styles.pDiscoverTitle}>Khám phá</p>
      <div className={styles.divDiscoverListContainer}>
        {array.map((discoverList, index) => {
          let jsx;
          
            switch (discoverList.type) {
              case 3:
                jsx = <IconDiscoverType3 />;
                break;
              case 4:
                jsx = <IconDiscoverType4 />;
                break;
              default:
                console.log("No Component - In DiscoverContainer");
            }
          
          return (
            <a
              key={index}
              className={styles.styledTmpLink}
              href={discoverList.link}
            >
              <div className={styles.divDiscoverItemContainer}>
                {jsx}
                <p className={styles.pText}>{discoverList.title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
