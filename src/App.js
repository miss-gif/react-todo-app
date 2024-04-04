import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useRef, useState } from "react";

const initState = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false,
  },
  {
    id: 3,
    text: "할 일 앱 만들기",
    checked: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  // todos 배열에 새 객체 추가
  const onInsert = text => {
    const todo = {
      id: nextId.current++,
      text,
      chcked: false,
    };
    setTodos(todos.concat(todo));
  };

  // 삭제 기능
  const OnRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능
  const OnToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} OnRemove={OnRemove} OnToggle={OnToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
