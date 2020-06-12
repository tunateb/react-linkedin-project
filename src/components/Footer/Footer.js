import React from "react";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoWrapper}>
        <img
          src={require("../../img/logo.png")}
          className={styles.logo}
          alt="logo"
        />
        <h6 className={styles.footerTitle}>
          Linked<span className={styles.footerTitleBlue}>In</span>
        </h6>
      </div>

      <div className={styles.footerNavWrapper}>
        <h6 className={styles.footerTitle}>Navigation</h6>
        <ul className={styles.footerNav}>
          <li className={styles.footerLink}>About</li>
          <li className={styles.footerLink}>Careers</li>
          <li className={styles.footerLink}>Advertising</li>
          <li className={styles.footerLink}>Small Business</li>
          <li className={styles.footerLink}>Talent Solutions</li>
          <li className={styles.footerLink}>Marketing Solutions</li>
          <li className={styles.footerLink}>Sales Solutions</li>
          <li className={styles.footerLink}>Safety Center</li>
          <li className={styles.footerLink}>Community Guidelines</li>
          <li className={styles.footerLink}>Privacy & Terms</li>
          <li className={styles.footerLink}>Mobile App</li>
        </ul>
      </div>

      <div className={styles.footerBtns}>
        <h6 className={styles.footerTitle}>Fast Access</h6>
        <Button buttonText="QUESTIONS?" />
        <Button buttonText="SETTINGS" />
      </div>
      <div>
        <h6 className={styles.footerTitle}>Language</h6>
      </div>
    </div>
  );
};

export default Footer;
