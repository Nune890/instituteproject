import React from "react";
import styles from "./GetinTouch.module.css";
import { socialMedia } from "../../../services/socialMedia";
import FormItem from "../formItem/FormItem";

const GetinTouch = () => {
  return (
    <div className={styles.mainBox}>
      <div className={styles.container}>
        <div className={styles.ContainerLeftBox}>
          <h1>Get in Touch</h1>
          <p>
            Suspendisse ultrice gravida dictum fusce placerat ultricies integer
          </p>
          <div className={styles.LeftMiddleBox}>
            <div className={styles.contactBox}>
              <a href="#address">
                <span>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="54" height="54" rx="27" fill="#EFEFEF" />
                    <path
                      d="M26.475 34.8984C25.9125 34.0781 25.268 33.1523 24.5414 32.1211C23.8383 31.0898 23.3344 30.3633 23.0297 29.9414C22.725 29.5195 22.3734 29.0039 21.975 28.3945C21.5766 27.7617 21.307 27.3164 21.1664 27.0586C21.0492 26.8008 20.9086 26.4727 20.7445 26.0742C20.6039 25.6758 20.5102 25.3359 20.4633 25.0547C20.4398 24.75 20.4281 24.3984 20.4281 24C20.4281 22.125 21.0844 20.5312 22.3969 19.2188C23.7094 17.9062 25.3031 17.25 27.1781 17.25C29.0531 17.25 30.6469 17.9062 31.9594 19.2188C33.2719 20.5312 33.9281 22.125 33.9281 24C33.9281 24.3984 33.9047 24.75 33.8578 25.0547C33.8344 25.3359 33.7406 25.6758 33.5766 26.0742C33.4359 26.4727 33.2953 26.8008 33.1547 27.0586C33.0375 27.3164 32.7797 27.7617 32.3812 28.3945C31.9828 29.0039 31.6312 29.5195 31.3266 29.9414C31.0219 30.3633 30.5062 31.0898 29.7797 32.1211C29.0766 33.1523 28.4437 34.0781 27.8812 34.8984C27.7172 35.1328 27.4828 35.25 27.1781 35.25C26.8734 35.25 26.6391 35.1328 26.475 34.8984ZM25.1742 26.0039C25.7367 26.543 26.4047 26.8125 27.1781 26.8125C27.9516 26.8125 28.6078 26.543 29.1469 26.0039C29.7094 25.4414 29.9906 24.7734 29.9906 24C29.9906 23.2266 29.7094 22.5703 29.1469 22.0312C28.6078 21.4688 27.9516 21.1875 27.1781 21.1875C26.4047 21.1875 25.7367 21.4688 25.1742 22.0312C24.6352 22.5703 24.3656 23.2266 24.3656 24C24.3656 24.7734 24.6352 25.4414 25.1742 26.0039Z"
                      fill="#FF0000"
                    />
                  </svg>
                </span>
              </a>
              <div className={styles.paBox}>
                <p>Our Address</p>
                <a href="#address" className={styles.aText}>
                  GENEVA: Place de la Fusterie 12, Geneva, 1204. SWITZERLAND.
                </a>
              </div>
            </div>
            <div className={styles.contactBox}>
              <a href="#address">
                <span>
                  <svg
                    width="54"
                    height="55"
                    viewBox="0 0 54 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.409912"
                      width="54"
                      height="54"
                      rx="27"
                      fill="#EFEFEF"
                    />
                    <path
                      d="M33.2756 36.168C33.1059 36.5902 32.8018 36.7627 32.3633 36.6854C27.9316 35.904 24.423 33.667 21.8375 29.9744C19.2519 26.2818 18.3498 22.2197 19.1312 17.7881C19.2085 17.3495 19.4746 17.1228 19.9295 17.1078L23.6767 16.9117C24.1356 16.8736 24.4187 17.0902 24.526 17.5613L25.5041 21.732C25.6006 22.1298 25.4628 22.4387 25.0908 22.6587L22.7144 23.9889C23.0974 25.4605 23.7283 26.8093 24.6069 28.0352C25.4814 29.2842 26.5331 30.3383 27.7619 31.1975L29.8593 29.4254C30.1702 29.1471 30.5076 29.1233 30.8715 29.354L34.4561 31.6996C34.839 31.9575 34.9341 32.2956 34.7414 32.7138L33.2756 36.168Z"
                      fill="#FF0000"
                    />
                  </svg>
                </span>
              </a>
              <div className={styles.paBox}>
                <p>Telephone</p>
                <a href="#phone">1-346-755-1453</a>
              </div>
            </div>
            <div className={styles.contactBox}>
              <a href="#address">
                <span>
                  <svg
                    width="54"
                    height="55"
                    viewBox="0 0 54 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.409912"
                      width="54"
                      height="54"
                      rx="27"
                      fill="#EFEFEF"
                    />
                    <path
                      d="M19 35C18.45 35 17.9793 34.8043 17.588 34.413C17.1967 34.0217 17.0007 33.5507 17 33V21C17 20.45 17.196 19.9793 17.588 19.588C17.98 19.1967 18.4507 19.0007 19 19H35C35.55 19 36.021 19.196 36.413 19.588C36.805 19.98 37.0007 20.4507 37 21V33C37 33.55 36.8043 34.021 36.413 34.413C36.0217 34.805 35.5507 35.0007 35 35H19ZM27 28L35 23V21L27 26L19 21V23L27 28Z"
                      fill="#FF0000"
                    />
                  </svg>
                </span>
              </a>
              <div className={styles.paBox}>
                <p>Email</p>
                <a href="#email">CIHE.AdmissionOffice@counsellor.com</a>
              </div>
            </div>
          </div>
          <div className={styles.socialMediaBox}>
            {socialMedia.map((el) => {
              return (
                <a href={el.link} key={el.id}>
                  {el.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.ContainerRightBox}>
          <FormItem/>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
