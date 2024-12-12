import React from "react";
import { data } from "../../../services/data";
import InstituteItem from "../../../sharedComponents/items/instituteItem/InstituteItem";
import styles from "./Institute.module.css";

const Institute = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.heroBox}>
        <div className={styles.nameBox}>
          <h1>Chartered institute of higher education and research</h1>
          <p>
            CIHE is a non-profit Chartered Professional Association legally
            established in Geneva and Bhubaneswar.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className={styles.homeBox}>
        {data.map((item) => {
         return <InstituteItem key={item.id} elem={item}/>
        })}
      </div>
    </div>
  );
};

export default Institute;
