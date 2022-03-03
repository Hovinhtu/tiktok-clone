import React from "react";
import styles from "../css/HeaderRight.module.css";
export default function HeaderRight() {
  return (
    <>
      <div className={styles.headerRightContainer}>
        <a href="/" className={styles.linkText}>
          Tải lên
        </a>
        <button className={styles.loginButton}>Đăng nhập</button>
        <i>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            color="#e6e7e8"
          >
            <path
              d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"
            ></path>
          </svg>
        </i>
      </div>
    </>
  );
}
