import React from "react";
import TodoForm from "../ToDoForm/TodoForm";
import Todo from "../ToDoItem/Todo";
import "./ToDoList.css";
import StyledButton from "../shared/StyledButton";

export default class TodoList extends React.Component {
  state = {
    itemsList: [],
    itemToShow: "all",
    toggleAllComplete: true,
    currentText: "",
  };

  addTodo = (item) => {
    this.setState((state) => ({
      itemsList: [item, ...state.itemsList],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.map((item) => {
        if (item.id === id) {
          // suppose to update
          return {
            ...item,
            complete: !item.complete,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      itemToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => item.id !== id),
    }));
  };

  handleTextChange = (text) => {
    this.setState({ currentText: text });
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      itemsList: state.itemsList.filter((item) => !item.complete),
    }));
  };

  render() {
    let itemsList = [];

    if (this.state.itemToShow === "all") {
      itemsList = this.state.itemsList;
    } else if (this.state.itemToShow === "active") {
      itemsList = this.state.itemsList.filter((item) => !item.complete);
    } else if (this.state.itemToShow === "complete") {
      itemsList = this.state.itemsList.filter((item) => item.complete);
    }

    return (
      <div className="listContainer">
        <h1 calssName="title">To Do List</h1>
        <TodoForm onSubmit={this.addTodo} />
        {itemsList.map((item) => (
          <Todo
            key={item.id}
            toggleComplete={() => this.toggleComplete(item.id)}
            onDelete={() => this.handleDeleteTodo(item.id)}
            item={item}
          />
        ))}
        <div>
          Items left:{" "}
          {this.state.itemsList.filter((item) => !item.complete).length}
        </div>
        <div>
          <StyledButton
            text={"all"}
            onClick={() => this.updateTodoToShow("all")}
          />
          <StyledButton
            text={"ACTIVE"}
            onClick={() => this.updateTodoToShow("active")}
          />
          <StyledButton
            text={"complete"}
            onClick={() => this.updateTodoToShow("complete")}
          />
        </div>
        <div>
          {this.state.itemsList.some((item) => item.complete) ? (
            <StyledButton
              text={"remove all complete items"}
              onClick={this.removeAllTodosThatAreComplete}
            ></StyledButton>
          ) : null}
        </div>
      </div>
    );
  }
}
