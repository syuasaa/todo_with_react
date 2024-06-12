import { useState } from "react";
import { MdOutlineDone } from "react-icons/md";

const TodoBodyItem = ({ item: { id, title, isDone, isEdit }, setTodos }) => {
  const [editInputValue, setEditInputValue] = useState(title);

  function deleteTodo() {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function editTodo() {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          if (isEdit) {
            todo.title = editInputValue.trim() ? editInputValue : todo.title;
          }
          todo.isEdit = !todo.isEdit;
        }
        return todo;
      })
    );
  }

  function checkTodo() {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  }

  return (
    <div className="todo-body-item">
      {isEdit ? (
        <input
          type="text"
          value={editInputValue}
          onChange={(e) => setEditInputValue(e.target.value)}
        />
      ) : (
        <p
          style={
            isDone ? { textDecoration: "line-through", color: "green" } : {}
          }
        >
          {title}
        </p>
      )}

      <div className="todo-body-item-actions">
        <div className="todo-body-item-actions-check" onClick={checkTodo}>
          {isDone && <MdOutlineDone />}
        </div>
        <button className="todo-body-item-actions-edit" onClick={editTodo}>
          {isEdit ? "Save" : "Edit"}
        </button>
        <button className="todo-body-item-actions-delete" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoBodyItem;
