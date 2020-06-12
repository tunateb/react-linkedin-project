import React from "react";
import styles from "./TodoCard.module.scss";
import Card from "../Card/Card";
import CardImg from "../CardImg/CardImg";
import Button from "../Button/Button";

const TodoCard = ({ todoTitle, todoText, imgSrc }) => {
  return (
    <div className={styles.todosCard}>
      <Card>
        <CardImg imgSrc={imgSrc} imgAlt="todos-image" />
        <div className={styles.todoWrapper}>
          <h6 className={styles.todoTitle}>{todoTitle}</h6>
          <p className={styles.todoText}>{todoText}</p>
        </div>
        <div>
          <Button buttonText="MORE" />
        </div>
      </Card>
    </div>
  );
};

export default TodoCard;
