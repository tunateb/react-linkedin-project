import React from "react";
import styles from "./TodoListLayout.module.scss";
import TodoCard from "../../components/TodoCard/TodoCard";

class TodoListLayout extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
  };

  render() {
    return <TodoCard />;
  }
}

export default TodoListLayout;
