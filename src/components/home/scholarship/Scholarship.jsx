import React from "react";
import styles from "./Scholarship.module.css";
import line from "../../../assets/homeImg/Line 1.png";
import studendsGirl from "../../../assets/homeImg/ed-about-1-2.40f5c889722c02f4c5a0.jpg.png"
import restaurant from "../../../assets/homeImg/ed-about-1-3.1c4f48b8fcd34ec0320e.jpg (1).png"
import point from "../../../assets/homeImg/Group 1410119159.png"
import studendsBoy from "../../../assets/homeImg/ed-about-1-1.a4d7d6ce97ea0b06acda.jpg.png"
import ListIcon from '../../../sharedComponents/svg/List';
import { scholarship } from "../../../services/scholarship";



 const Scholarship = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.heroBox}>
        <h1>Scholarship</h1>
        <img src={line} alt="img" className={styles.lineImg} />
        <ul>
          {
            scholarship.map((el)=>{
              return <li key={el.id}>
                 <ListIcon/>
                  {el.description}
              </li>
            })
          }
        </ul>
      </div>
      <div className={styles.imgBox}>
        <div className={styles.imgBoxFirstBox}>
          <img src={studendsGirl} alt="img" />
          <div className={styles.imgPositionBox}>
           <img src={restaurant} alt="img" className={styles.restaurantImg} />
          <img src={point} alt="img" className={styles.pointImg}/>  
          </div>
        </div>
        <div className={styles.lastBox}>
          <img src={studendsBoy} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
