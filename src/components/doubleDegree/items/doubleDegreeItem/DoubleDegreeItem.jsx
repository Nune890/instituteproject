import React from "react";
import styles from "./DoubleDegreeItem.module.css";
import quot from "../../../../assets/homeImg/quot.png";

const DoubleDegreeItem = ({elem}) => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.imgBox}>
        <span>
          <svg
            width="40"
            height="40"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_140_698)" filter="url(#filter0_d_140_698)">
              <path
                opacity="0.3"
                d="M7 6.66675H37V23.3334H7V6.66675Z"
                fill="#EE4248"
              />
              <path
                d="M37.3333 3H7.33333C5.5 3 4 4.5 4 6.33333V26.3333C4 28.1667 5.5 29.6667 7.33333 29.6667H19L15.6667 34.6667V36.3333H29V34.6667L25.6667 29.6667H37.3333C39.1667 29.6667 40.6667 28.1667 40.6667 26.3333V6.33333C40.6667 4.5 39.1667 3 37.3333 3ZM37.3333 23H7.33333V6.33333H37.3333V23Z"
                fill="#EE4248"
              />
            </g>
            
          </svg>
        </span>
        <img src={quot} alt="img" />
      </div>
      <h2>{elem.title}</h2>
      <p>{elem.description}</p>
    </div>
  );
};

export default DoubleDegreeItem;
