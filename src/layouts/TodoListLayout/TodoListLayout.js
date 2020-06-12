import React from "react";
import TodoCard from "../../components/TodoCard/TodoCard";

class TodoListLayout extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = async () => {
    const pathname = this.props.history.location.pathname;
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();

    this.setState({ todos: data }, () => {
      console.log(this.state.todos);
    });
  };

  render() {
    return this.state.todos.map((todo, index) => (
      <TodoCard
        todoTitle={todo.title}
        todoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat dictum euismod. 
        Nullam et tellus sed arcu porttitor iaculis id id eros. Suspendisse vitae vestibulum est. Proin augue urna, 
        finibus id auctor eu, vulputate eget nibh. In eu magna tristique libero vestibulum posuere. "
        key={todo.id}
        imgSrc={`https://unsplash.it/200/20${todo.id}`}
      />
    ));
  }
}

export default TodoListLayout;
