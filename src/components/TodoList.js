import React from "react";
import TodoListItem from "./TodoListItem";
import "../style/TodoList.scss";

const TodoList = ({ todos, OnRemove, OnToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          OnRemove={OnRemove}
          OnToggle={OnToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
