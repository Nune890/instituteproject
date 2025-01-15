import React, { useEffect } from "react";
import styles from "./ProfessionsItem.module.css";

const ProfessionsItem = ({ item, professionId, checked }) => {
  
  return (
    <button
      className={styles.mainBox}
      onClick={() => professionId(item.id)}
      style={{ boxShadow: checked ? "0px 2px 0px red" : "none" }}
    >
      <span>{item.icon}</span>
      <h5>{item.profession}</h5>
      <p>{item.info}</p>
    </button>
  );
};

export default ProfessionsItem;
