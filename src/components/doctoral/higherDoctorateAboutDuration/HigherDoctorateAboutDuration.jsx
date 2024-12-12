import React from "react";
import styles from "./HigherDoctorateAboutDuration.module.css";
import point from "../../../assets/homeImg/Group 1410119159.png";
import { higherDoctorateItemsData } from "../../../services/higherDoctorateItem";
import DoubleDegreeItem from "../../doubleDegree/items/doubleDegreeItem/DoubleDegreeItem";

const HigherDoctorateAboutDuration = () => {
  return (
    <div className={styles.mainBox}>
      <h1>Doctor of philosophy/ Higher doctorate</h1>
      <div className={styles.itemsBox}>
        {
          higherDoctorateItemsData.map((item)=>{
            return(
              <DoubleDegreeItem key={item.id} elem={item}/>
            )
          })
        }
      </div>
      <img src={point} alt="img" className={styles.pointImg} />
      <div className={styles.applyBox}>
        <h1>HOW TO APPLY</h1>
        <p>
          Candidate should contact 
          <a href="#mail">CIHE.AdmissionOffice@counsellor.com </a>
          clearly mentioning area of interest, personal and professional
          credentials.
        </p>
      </div>
    </div>
  );
};

export default HigherDoctorateAboutDuration;
