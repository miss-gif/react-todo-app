import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../style/TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const onChange = e => {
    setValue(e.target.value);
    console.log("입력 중 :", e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
