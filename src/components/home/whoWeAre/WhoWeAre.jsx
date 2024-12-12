import React from "react";
import styles from "./WhoWeAre.module.css";
import quot from "../../../assets/homeImg/quot.png";
import { whoWeAreData } from "../../../services/whoWeAreData";
import WhoWeAreItem from "../whoWeAreItem/WhoWeAreItem";

const WhoWeAre = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.firstChildBox}>
        {whoWeAreData.map((item) => {
          return <WhoWeAreItem key={item.id} elem={item} />;
        })}
      </div>
      <div className={styles.lastChildBox}>
        <div className={styles.lastBoxImgBox}>
          <p>Our Vision and Core Values</p>
          <img src={quot} alt="img" />
        </div>
        <h1>Who We Are and What We Strive For</h1>
        <ul className={styles.boltUl}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </li>
          <li>tempor incididunt ut labore.</li>
        </ul>
        <ul className={styles.standartUl}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </li>
          <li>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis
          </li>
          <li>
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </li>
          <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </li>
          <li>incididunt ut labore et dolore magna aliqua. </li>
        </ul>
        <div className={styles.buttonBox}>
          <button>Contact Us</button>
          <span>
            <svg
              width="59"
              height="59"
              viewBox="0 0 59 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.519531"
                y="0.5"
                width="58"
                height="58"
                rx="29"
                fill="#FF8387"
              />
              <path
                d="M32.0195 22.7402L37.0195 28.7402L32.0195 34.7402"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.0195 28.7402H37.0195"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
