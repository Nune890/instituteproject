import React, { useState } from "react";
import point from "../../../assets/homeImg/Group 1410119159.png";
import books from "../../../assets/routeElementsImg//books.png";
import flowerpot from "../../../assets/routeElementsImg/flowerpot.png";
import pencil from "../../../assets/routeElementsImg/pencil.png";
import { accordion } from "../../../services/accordion";
import Accordion from "../accordion/Accordion";
import styles from "./Questions.module.css";

const Questions = () => {
  const [id, setId] = useState(-1);
  
  const getId = (getId) => {
  
    if (getId === id) {
      setId(-1);
    } else {
      setId(getId);
    }
  };

  return (
    <div className={styles.mainBox}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.container}>
        <div className={styles.containerLeftBox}>
          {accordion.map((item) => {
            return (
              <Accordion
                key={item.id}
                elem={item}
                setId={getId}
                isShow={item.id === id ? true : false}
              />
            );
          })}
        </div>
        <div className={styles.containerRightBox}>
          <div className={styles.rightTopBox}>
            <img src={pencil} alt="img" />
            <img src={books} alt="img" className={styles.books} />
            <img src={point} alt="img" className={styles.pointImg} />
          </div>
          <img src={flowerpot} alt="img" className={styles.RightBottomBoxImg} />
        </div>
      </div>
    </div>
  );
};

export default Questions;
