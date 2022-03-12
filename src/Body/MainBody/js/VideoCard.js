import React from "react";
import styles from "../css/VideoCard.module.css";
export default function VideoCard() {
  return (
    <div className={styles.divVideoWrapper}>
      <div className={styles.divVideoCardContainer}>
        <canvas
          width="56.25"
          height="100"
          className={styles.canvasVideoCardPlaceholder}
        ></canvas>
        <div className={styles.divVideoPlayerContainer}>
          <div mode="0" className={styles.divContainer}>
            <img
              mode="0"
              src="https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/d3fbb405ca5b4edaa487622eff96d101?x-expires=1647025200&amp;x-signature=yyRDy2pKQhYFWCxtwbXH38%2BXpo8%3D"
              alt="video mèo cho bạn nào cần nhé 🥰#xuhuongtiktok #xuhuongdi"
              loading="lazy"
              className={styles.imgPoster}
            ></img>
            <div className={styles.divBasicPlayerWrapper}>
              <video
                src="https://v16-webapp.tiktok.com/5d84d0e8cefb635d9751aad0e7da40b0/622baa0e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fe5e331a5b0c4357b04b347c76d40b34/?a=1988&amp;br=1570&amp;bt=785&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=XOQ9-3LGnz7ThUSEVDXq&amp;l=2022031113585901024404921926DA9B5A&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anh0ZmY6Zmg8OzMzZjgzM0ApZGY6NDo0N2UzN2Y8ZDM5NmdpNGM2cjQwbGBgLS1kL2NzczI1YmIwLWIvYi8zXzQzXjY6Yw%3D%3D&amp;vl=&amp;vr="
                playsinline=""
                autoplay=""
                className={styles.videoBasic}
              ></video>
            </div>
          </div>
          <div className={styles.divPlayIconContainer}>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"
              ></path>
            </svg>
          </div>
          <div className={styles.divVoiceContainer}>
            <div className={styles.divMuteIconContainer}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"></path>
              </svg>
            </div>
          </div>
          <div className={styles.divVideoControlBottom}></div>
          <p className={styles.pReportText}>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              fill="currentColor"
              className={styles.iconFlag}
            >
              <path d="M9 9.31286V27.0626C9.98685 26.7378 11.184 26.4042 12.5108 26.1585C16.1115 25.4917 21.0181 25.4123 25.1625 28.3726C28.0181 30.4123 31.6115 30.4917 34.7608 29.9085C36.306 29.6223 37.6602 29.1908 38.6289 28.8293C38.7603 28.7803 38.8841 28.7328 39 28.6872V10.9374C38.0131 11.2623 36.816 11.5959 35.4892 11.8416C31.8885 12.5084 26.9819 12.5878 22.8375 9.62751C19.9819 7.58781 16.3885 7.5084 13.2392 8.09161C11.694 8.37776 10.3398 8.80927 9.37105 9.17072C9.23971 9.21973 9.11586 9.2673 9 9.31286ZM40.1067 6.21064C40.7264 5.90123 41.4622 5.93453 42.0515 6.29874C42.6411 6.66315 43 7.30688 43 8.00004V30C43 30.7576 42.572 31.4501 41.8944 31.7889L41 30C41.8944 31.7889 41.8931 31.7895 41.8931 31.7895L41.8916 31.7903L41.8878 31.7922L41.8775 31.7973L41.846 31.8127C41.831 31.82 41.8128 31.8288 41.7915 31.839C41.7761 31.8464 41.7589 31.8545 41.7401 31.8634C41.651 31.9055 41.525 31.9637 41.3654 32.0343C41.0466 32.1753 40.5919 32.3663 40.0273 32.577C38.9023 32.9967 37.319 33.5027 35.4892 33.8416C31.8885 34.5084 26.9819 34.5878 22.8375 31.6275C19.9819 29.5878 16.3885 29.5084 13.2392 30.0916C11.694 30.3778 10.3398 30.8093 9.37105 31.1707C9.23971 31.2197 9.11586 31.2673 9 31.3129V44.0001C9 44.5524 8.55228 45.0001 8 45.0001H6C5.44772 45.0001 5 44.5524 5 44.0001V8.00004C5 7.24249 5.42801 6.54996 6.10558 6.21118L7 8.00004C6.10558 6.21118 6.10688 6.21053 6.10688 6.21053L6.10842 6.20976L6.11219 6.20789L6.12249 6.20279L6.15404 6.18734C6.17988 6.17477 6.21529 6.15773 6.25987 6.13667C6.34902 6.09457 6.47498 6.03636 6.63455 5.9658C6.95342 5.8248 7.4081 5.63378 7.9727 5.42311C9.09774 5.00332 10.681 4.49734 12.5108 4.15849C16.1115 3.49171 21.0181 3.4123 25.1625 6.37257C28.0181 8.41227 31.6115 8.49167 34.7608 7.90846C36.306 7.62231 37.6602 7.1908 38.6289 6.82935C39.1112 6.6494 39.4925 6.48886 39.7478 6.37595C39.8754 6.31956 39.9711 6.27523 40.0318 6.24653C40.0622 6.23219 40.0838 6.22177 40.0962 6.21572L40.1056 6.21118L40.1067 6.21064Z"></path>
              ;
            </svg>
            Báo cáo
          </p>
        </div>
      </div>
      <div className={styles.divActionItemContainer}></div>
    </div>
  );
}
