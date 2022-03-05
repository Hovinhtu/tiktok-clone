import React from 'react'
import MainNavBar from './js/MainNavBar'
import FrameContainer from './js/FrameContainer'
import UserContainer from './js/UserContainer'
import styles from "./css/IndexSideBar.module.css"

export default function IndexSideBar() {
  return (
    <div className={styles.divSideBar}>
      <div className={styles.divScrollContainer}>
          <div className={styles.divWrapper}>
            <MainNavBar/>
            <FrameContainer/>
            <UserContainer/>
          </div>
          <div className={styles.divScrollBar}></div>
      </div>
    </div>
  )
}
