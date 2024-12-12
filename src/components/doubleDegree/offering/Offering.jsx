import React from "react";
import styles from "./Offering.module.css";
import point from "../../../assets/homeImg/Group 1410119159.png";
import { dataOfferItem } from "../../../services/dataOfferItem";
import DoubleDegreeItem from "../items/doubleDegreeItem/DoubleDegreeItem";

const Offering = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.headerTextBox}>
        <p className={styles.redP}>Our Vision and Core Values</p>
        <h1>We are offering</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className={styles.itemsBox}>
        {
            dataOfferItem.map((item)=>{
                return(
                   <DoubleDegreeItem key={item.id} elem={item}/>
                )
            })
        }
      </div>
      <img src={point} alt="img" className={styles.pointImg} />
    </div>
  );
};

export default Offering;
