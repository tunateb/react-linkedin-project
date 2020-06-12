import React from "react";
import styles from "./TodoCard.module.scss";
import Card from "../Card/Card";
import CardImg from "../CardImg/CardImg";
import Button from "../Button/Button";

const TodoCard = ({ todoTitle, todoText }) => {
  return (
    <div className={styles.todosCard}>
      <Card>
        <CardImg imgSrc="https://unsplash.it/200/200" imgAlt="todos-image" />
        <div className={styles.todoWrapper}>
          <h6 className={styles.todoTitle}>{todoTitle}</h6>
          <p className={styles.todoText}>{todoText}</p>
        </div>
        <Button buttonText="MORE" />
      </Card>
    </div>
  );
};

export default TodoCard;
