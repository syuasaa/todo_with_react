import { useEffect, useRef } from "react";

const TodoHead = ({ inputValue, setInputValue, setTodos }) => {
  const inputRef = useRef(null);

  function addTodo() {
    if (inputValue.trim()) {
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
            title: inputValue,
            isEdit: false,
            isDone: false,
            isVisible: true,
          },
        ];
      });
      setInputValue("");
      inputRef.current.style = `
        border-color: grey;
        box-shadow: none;
      `;
    } else {
      inputRef.current.style = `
        border-color: red;
        box-shadow: 2px 2px 10px red;
      `;
    }
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      addTodo();
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  });

  return (
    <div className="todo-head">
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoHead;
