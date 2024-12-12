import React from "react";
import styles from "./MessageDean.module.css";
import men from "../../../assets/homeImg/Rectangle 1225.png";
import line from "../../../assets/homeImg/Line 1.png"
const MessageDean = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.heroBox}>
        <h2>Message from dean</h2>
        <img src={line} alt="img"className={styles.imgLine} />
        <p className={styles.decorText}>Heartiest welcome to all incoming students</p>
      <p className={styles.firstP}>  Congratulations! You've taken the right step to embark your career journey.</p>
         <p>   ​We strongly believe in - education is not the learning of facts but training of the mind to think. ​​We assure you that your personal and professional learning objectives will be well taken care of by our teaching and coaching professionals. You'll be taught by professionals with academic credentials from global premier schools and have more than two decades of professional experience in multi-locations - US, UK, India, Middle East and Singapore.We  shall work with you, design
         a learning path and map it to your career ambitions. And - we don't stop there. </p>
         <div className={styles.lastPbox}>
            <p>Let's start the journey. </p>
            <p>
          Sincerely,
              <br />
            Stephen C. Moss
           </p>
         </div>
      </div>
      <img src={men} alt="img"className={styles.imgMan} />
    </div>
  );
};

export default MessageDean;
