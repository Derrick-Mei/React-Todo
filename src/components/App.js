import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: ""
    };
  }

  handleRemoveTodo = todoId => {
    const todoList = this.state.todoList;
    const list = todoList.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(list);
    this.setState({ todoList: list });
  };

  handleTodoChange = event => {
    this.setState({ todo: event.target.value });
  };

  handleAddTodo = () => {
    const todoList = this.state.todoList; //reference todo array

    const todo = {
      // build out our todo object
      id: this.state.todoList.length + this.state.todo,
      title: this.state.todo,
      completed: false
    };

    todoList.push(todo); // add todo to todo list
    this.setState({ todoList, todo: "" });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleTodoChange}
        />
        <button onClick={this.handleAddTodo}>Submit Todo</button>
        <TodoList
          removeTodo={this.handleRemoveTodo}
          todoList={this.state.todoList}
        />
      </div>
    );
  }
}

export default App;
