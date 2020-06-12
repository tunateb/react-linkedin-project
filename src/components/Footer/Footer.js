import React from "react";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import FooterLink from "./FooterLink/FooterLink";

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
          <FooterLink linkText="About" />
          <FooterLink linkText="Careers" />
          <FooterLink linkText="Advertising" />
          <FooterLink linkText="Small Business" />
          <FooterLink linkText="Talent Solutions" />
          <FooterLink linkText="Marketing Solutions" />
          <FooterLink linkText="Sales Solutions" />
          <FooterLink linkText="Safety Center" />
          <FooterLink linkText="Community Guidelines" />
          <FooterLink linkText="Privacy & Terms" />
          <FooterLink linkText="Mobile App" />
        </ul>
      </div>

      <div className={styles.footerBtns}>
        <h6 className={styles.footerTitle}>Fast Access</h6>
        <Button buttonText="QUESTIONS?" />
        <Button buttonText="SETTINGS" />
      </div>
      <div>
        <h6 className={styles.footerTitle}>Language</h6>
        <select name="language" id="language">
          <option value="English">ENGLISH</option>
          <option value="Turkish">TURKISH</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
