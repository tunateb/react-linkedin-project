import React from "react";
import styles from "./Button.module.scss";

const Button = ({onBtnClick}) => {
  return (
   
      <button className={styles.btn} onClick={onBtnClick}>GO TO PROFILE</button>
   
  );
};

export default Button;
