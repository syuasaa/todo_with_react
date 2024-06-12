import { useState } from "react";

import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";
import TodoStatistics from "./todo-statistics/TodoStatistics";

import "./Todo.scss";

const Todo = () => {
  // lknclkasnclkan
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <TodoStatistics todos={todos} setTodos={setTodos} />
      <TodoHead
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
      />
      <TodoBody todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
