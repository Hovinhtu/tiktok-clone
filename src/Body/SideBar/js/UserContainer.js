import React from "react";
import styles from "../css/UserContainer.module.css";
import { api } from "../API/Discover";
import { useEffect, useState, useRef } from "react";
import IconVerify from "../svgComponent/IconVerify";
import ProfileOuterContainer from "./ProfileOuterContainer";

//const url = "https://www.tiktok.com/node/share/discover?aid=1988&app_language=vi-VN&app_name=tiktok_web&battery_info=1&browser_language=vi-VN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F99.0.4844.51%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7068933436447311362&device_platform=web_pc&focus_state=true&from_page=fyp&history_len=6&is_fullscreen=false&is_page_visible=true&noUser=0&os=windows&pageId=&priority_region=&referer=https%3A%2F%2Fwww.tiktok.com%2Flive&region=VN&root_referer=https%3A%2F%2Fwww.google.com%2F&scene=17&screen_height=864&screen_width=1536&tz_name=Asia%2FSaigon&userId=&webcast_language=vi-VN&msToken=mposiD_Wxa3otpdLNjT9kmkflKJSlhtv6MaZf3UpNd917Rp_Oe3-oKWKraD14FDTwQA7zDSC4vaQdigfGvz5MkrRrKcEygk3_7x9essU4qi9KW1fjTsombC85n8KM6Nx4Jd15hwG&X-Bogus=DFSzswSOYGXANHYMS2ltlsXyYJlt&_signature=_02B4Z6wo00001U8MqoAAAIDAbK2ELQMEQS1PDK4AADHj76"
export default function UserContainer() {
  const arrayDiscovers = Object.values(Object.values(api)[1][0])[1];

  const [showMoreTitle, setShowMoreTitle] = useState("Xem tất cả");
  const [showMoreFlag, setShowMoreFlag] = useState(true);
  const [idProfile, setIdProfile] = useState();

 
  const handleClickShowMoreText = () => {
    setShowMoreTitle(showMoreFlag ? "Ẩn bớt" : "Xem tất cả");
    setShowMoreFlag((prev) => !prev);
  };

  const handleMouseToShowProfile = (id) => {
    setIdProfile(id)
  };
  const handleMouseToHideProfile = () => {
    setIdProfile(2000);
  };
  return (
    <div className={styles.divUserContainer}>
      <p className={styles.pTitle}>Tài khoản được đề xuất</p>
      {arrayDiscovers.map((discover, index) => {
        const convertDiscover = Object.values(discover)[0];
        return (
          <div
            key={convertDiscover.id}
            className={styles.divUserLinkContainer}
            style={index >= 5 && showMoreFlag ? { display: "none" } : {}}
            onMouseEnter={() => handleMouseToShowProfile(index)}
            onMouseLeave={handleMouseToHideProfile}
          >
            <a href={convertDiscover.link}>
              <div
                className={styles.divUserAvatar}
                style={{ width: "32px", height: "32px" }}
              >
                <span
                  className={styles.spanUserAvatar}
                  style={{ width: "32px", height: "32px" }}
                >
                  <img
                    src={convertDiscover.cover}
                    className={styles.imgAvatar}
                  />
                </span>
              </div>
            </a>
            <a
              href={convertDiscover.link}
              className={styles.userContentLink}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.divUserTitleWrapper}>
                <h4 className={styles.h4UserTitle}>
                  {convertDiscover.subTitle.slice(1)}
                </h4>
                <div>
                  <IconVerify />
                </div>
              </div>
              <p className={styles.pUserDescription}>{convertDiscover.title}</p>
            </a>
            {index === idProfile && (
              <ProfileOuterContainer
                link={convertDiscover.link}
                cover={convertDiscover.cover}
                subTitle={convertDiscover.subTitle.slice(1)}
                title={convertDiscover.title}
                follower={convertDiscover.extraInfo.fans}
                like={convertDiscover.extraInfo.likes}
              />
            )}
          </div>
        );
      })}
      <div className={styles.divShowMoreText}>
        <p className={styles.showMoreText} onClick={handleClickShowMoreText}>
          {showMoreTitle}
        </p>
      </div>
    </div>
  );
}
/*  useEffect(() => {
    fetch(
      url,{
        Mode: 'no-cors'
      }
     
    )
      .then((res) => console.log(res.json()))
      .then((discovers) =>  console.log(discovers));
  }, []);*/
