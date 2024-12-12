import React from "react";
import styles from "./FormItem.module.css"

const FormItem = () => {
  return (
    <div className={styles.mainBox}>
      <form>
        <label htmlFor="name">
          First Name
          <input type="text" id="name" placeholder="Nune" />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" id="lastName"  placeholder="Hovakimyan"/>
        </label>
        <label htmlFor="phone">
          Phone
          <input type="text" id="phone" placeholder="+374 94444912" />
        </label>
        <label htmlFor="emailAddress*">
          Email Address*
          <input type="text" id="emailAddress*" placeholder="nunehovakimyan2@gmail.com" />
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" placeholder="How to apply?"></textarea>
        </label>
      </form>
      </div>
  );
};

export default FormItem;
