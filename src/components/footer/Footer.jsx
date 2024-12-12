import React from "react";
import styles from "./Footer.module.css";
import cihe from "../../assets/headerImg/Group 9156.png";
import { socialMedia } from "../../services/socialMedia";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <div className={styles.leftBox}>
        <div className={styles.leftChildBox}>
          <img src={cihe} alt="img" />
          <p>
            CIHE is a non-profit Chartered Professional Association legally
            established in Geneva and Bhubaneswar.
          </p>
        </div>
      </div>
      <div className={styles.middleBox}>
        <div className={styles.aBox}>
          <a href="#About">About Us</a>
          <a href="#Programst">Programs</a>
          <a href="#Collaboration">Collaboration</a>
        </div>
        <div className={styles.aBox}>
          <a href="#DoubleDegree">Double Degree</a>
          <a href="#FAQ">FAQ</a>
          <a href="#ContactUs">Contact Us</a>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.rightChildBox}>
          <div className={styles.socialMediaBox}>
            {
              socialMedia.map((item)=>{
                return(
                 <a href={item.link} key={item.id}>{item.icon}</a>
                )
              })
            }
          </div>
          <a href="#mail">cihe@gmail.com</a>
         <a href="#phone">+123 456 789</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
