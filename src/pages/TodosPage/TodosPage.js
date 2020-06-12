import React from "react";
import styles from "./TodosPage.module.scss";
import TodoListLayout from "../../layouts/TodoListLayout/TodoListLayout";

const TodosPage = () => {
  return (
    <div className={styles.todoContent}>
      <div className={styles.todosSearchCard}>
        <div className={styles.todosSearchTitle}>YOUR DREAM JOB IS HERE</div>
        <input
          type="text"
          placeholder="Search jobs"
          className={styles.todosSearch}
        />
      </div>

      <div className={styles.todosSeperator}>TODOS</div>

      <TodoListLayout />
    </div>
  );
};

export default TodosPage;
