import React from "react";
import styles from "./Header.module.css";
import cihe from "../../assets/headerImg/Group 9156.png";
import { routes } from "../../services/routes";
import MenuItem from "../../sharedComponents/items/menuItem/MenuItem";
import Language from "../../sharedComponents/language/Language";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.imgBox}>
        <Link to="/">
          <img src={cihe} alt="img" />
        </Link>
      </div>
      <nav className={styles.aBox}>
        {routes.map((elem) => {
          return <MenuItem key={elem.id} item={elem} />;
        })}
      </nav>
      <Language/>
    </div>
  );
};

export default Header;
