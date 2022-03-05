import React from 'react'
import MainNavBar from './js/MainNavBar'
import styles from "./css/IndexSideBar.module.css"

export default function IndexSideBar() {
  return (
    <div className={styles.divSideBar}>
      <div className={styles.divScrollContainer}>
          <div className={styles.divWrapper}>
            <MainNavBar/>
          </div>
          <div className={styles.divScrollBar}></div>
      </div>
    </div>
  )
}
