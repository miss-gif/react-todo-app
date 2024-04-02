import React from "react";
import "../style/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  console.log(children);

  return (
    <div className="TodoTemplate">
      <h2 className="app-title">일정관리</h2>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
