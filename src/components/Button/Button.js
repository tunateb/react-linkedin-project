import React from "react";
import styles from "./Button.module.scss";

const Button = ({onBtnClick, buttonText}) => {
  return (
   
    <button className={styles.btn} onClick={onBtnClick}>{buttonText}</button>
   
  );
};

export default Button;
