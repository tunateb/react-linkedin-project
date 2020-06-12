import React from "react";
import styles from "./CardImg.module.scss";

const CardImg = ({ imgSrc, imgAlt }) => {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} className={styles.cardImg} />
    </div>
  );
};

export default CardImg;
