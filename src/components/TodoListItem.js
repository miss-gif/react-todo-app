import React, { useState } from "react";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import "../style/TodoListItem.scss";
import classNames from "classnames";

const TodoListItem = ({ todo, OnRemove, OnToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={classNames("checkbox", { checked })}
        onClick={() => {
          OnToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          OnRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
