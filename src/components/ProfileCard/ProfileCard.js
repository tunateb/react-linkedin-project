import React from "react";
import styles from "./ProfileCard.module.scss";
import Card from "../Card/Card";
import CardImg from "../CardImg/CardImg";
import Button from "../Button/Button";

const ProfileCard = ({ imgSrc, imgAlt, userName, userEmail, onBtnClick }) => {
  return (
    <Card>
      <CardImg imgSrc={imgSrc} imgAlt={imgAlt} />
      <div className={styles.userText}>
        <h3 className={styles.userName}>{userName}</h3>
        <p className={styles.userEmail}>{userEmail}</p>
      </div>
      <Button onBtnClick={onBtnClick} />
    </Card>
  );
};

export default ProfileCard;
