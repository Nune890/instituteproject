import React from "react";
import styles from "./YourCareer.module.css";
import save from "../../../assets/homeImg/svg.f9cd97f88536d68ef31c7983b7c360d9.svg.png";
import shadow from "../../../assets/homeImg/shadow.png"

const YourCareer = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.backBox}>
        <div className={styles.container}>
          <p className={styles.greenP}>
            <img src={save} alt="img" />
            DARE-DREAM-ACHIEVE
        </p>
        <h1>YOUR CAREER MATTERS TO US</h1>
        <p>Choosing a career and right school are not easy - we make it simple. Irrespective of candidates'
             personal and professional situations, we guide each student and design best programs for him/her. We're founded by industry veterans with academic credentials from global top 100 schools with experience at C-Level in various
         locations of the world - US, UK, Middle East, Singapore and India.</p>
         <div className={styles.buttonBox}>
            <button>Formation and registration</button>
            <button>Accreditation</button>
         </div>
        </div>
        <img src={shadow} alt="img" className={styles.shadowImg} />
      </div>
    </div>
  );
};

export default YourCareer;
