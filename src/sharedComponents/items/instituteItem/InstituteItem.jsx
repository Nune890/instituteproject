import React from "react";
import styles from "./InstituteItem.module.css";

const InstituteItem = ({ elem }) => {
  return (
    <div
      style={{ backgroundImage: `url(${elem.img})` }}
      className={styles.mainBox}
    >
      <p>{elem.description}</p>
    </div>
  );
};

export default InstituteItem;
