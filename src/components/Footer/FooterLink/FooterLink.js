import React from "react";
import styles from "./FooterLink.module.scss";

const FooterLink = ({ linkText }) => {
  return <li className={styles.footerLink}>{linkText}</li>;
};

export default FooterLink;