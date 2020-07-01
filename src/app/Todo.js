import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
    };
  }
  handleClick(e) {
    const { value } = e.target;
    this.setState({ newTodo: value });
  }

  handleC(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: "" });
  }

  removeTodo(i) {
    const todos = [
      ...this.state.todos.slice(0, i),
      ...this.state.todos.slice(i + 1),
    ];
    this.setState({ todos });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="New Todo"
            value={this.state.newTodo}
            onChange={this.handleClick.bind(this)}
          />
          <button onClick={this.handleC.bind(this)}>Create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i} onClick={() => this.removeTodo.call(this, i)}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
