import React from "react";
import IconHeader from "./js/IconHeader";
import SearchForm from "./js/SearchForm";
import HeaderRight from "./js/HeaderRight";

import styles from "./css/Index.module.css";

export default function Index() {
  return (
    <div className={styles.headerContainerMain}>
      <div className={styles.headerWrapperMain}>
        <IconHeader />
        <SearchForm />
        <HeaderRight />
      </div>
    </div>
  );
}
