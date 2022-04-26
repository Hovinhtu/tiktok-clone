import React from 'react'
import styles from "../css/FrameContainer.module.css"
export default function FrameContainer() {
  return (
    <div className={styles.divFrameContainer}>
       <p className={styles.pLoginHint}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
       <button type='button' className={styles.loginButton}>Đăng nhập</button>
    </div>
  )
}
