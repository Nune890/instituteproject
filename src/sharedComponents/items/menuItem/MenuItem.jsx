import React, { useState } from "react";
import styles from "./MenuItem.module.css";
// import { Link } from "react-router-dom";
import arrow from "../../../assets/headerImg/Vector.png";
import { Link } from "react-router";

const MenuItem = ({ item }) => {
  return (
    <div className={styles.itemBox}>
      {item.isThereSubMenu ? (
        <div className={styles.isThereSubMenuBox}>
          <span>{item.name}
            <img src={arrow}
             alt="img"
             />
             
          </span>
          <div className={styles.subMenu}>
            {item.subMenu.map((el) => {
              return <Link key={el.id} to={`/${el.url}`}>{el.name}</Link>;
            })}
          </div>
        </div>
      ) : (
        <Link to={`/${item.url}`}>{item.name}</Link>
      )}
    </div>
  );
};

export default MenuItem;
